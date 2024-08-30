# https://identity.onehealthcareid.com/oneapp/index.html#/login
# Page to go to login and find api
# backend/api/services/aarp_med.py

import requests


def get_access_token(client_id, client_secret):
    """
    Fetches an access token from UnitedHealthcare's OAuth 2.0 authorization server.
    """
    token_url = "https://[payer].authz.flex.optum.com/oauth/token"  # Replace [payer] with the correct payer ID

    # Define request parameters
    payload = {
        "grant_type": "client_credentials",
        "client_id": client_id,
        "client_secret": client_secret,
        "scope": "public/Organization.read public/InsurancePlan.read",  # Scopes required for your API call
    }

    headers = {"Content-Type": "application/x-www-form-urlencoded"}

    try:
        # Send POST request to get the access token
        response = requests.post(token_url, data=payload, headers=headers)
        response.raise_for_status()
        return response.json().get("access_token")
    except requests.exceptions.RequestException as e:
        return {"error": f"Error fetching access token: {str(e)}"}


def fetch_aarp_medicare_plans(access_token):
    """
    Fetch data from the AARP Medicare Advantage Plans API.
    """
    base_url = "https://public.fhir.flex.optum.com/R4/InsurancePlan"  # Base URL for public directory endpoints

    headers = {"Authorization": f"Bearer {access_token}", "Accept": "application/json"}

    # Define any specific query parameters for your request
    params = {
        "name": "AARP",  
    }

    try:
        # Make the GET request to the API
        response = requests.get(base_url, headers=headers, params=params)
        response.raise_for_status() # Return the JSON response data
    except requests.exceptions.RequestException as e:
        return {"error": f"Error fetching AARP Medicare plans: {str(e)}"}


def get_aarp_medicare_data(client_id, client_secret):
    """
    Orchestrates the process of fetching AARP Medicare data by first getting an access token and then making the API request.
    """
    # Step 1: Get the access token
    access_token = get_access_token(client_id, client_secret)
    if isinstance(access_token, dict) and "error" in access_token:
        return access_token  # Return error if token fetch failed

    # Step 2: Fetch the AARP Medicare Advantage Plans data
    data = fetch_aarp_medicare_plans(access_token)
    return data
