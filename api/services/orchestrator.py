# backend/api/services/orchestrator.py

import asyncio
import requests


async def fetch_api_data(url, headers=None, params=None):
    try:
        response = requests.get(url, headers=headers, params=params)
        response.raise_for_status()
        return response.json()
    except Exception as e:
        return {"error": str(e)}


async def fetch_multiple_apis(api_list):
    loop = asyncio.get_event_loop()
    tasks = [
        loop.run_in_executor(
            None, fetch_api_data, api["url"], api.get("headers"), api.get("params")
        )
        for api in api_list
    ]
    responses = await asyncio.gather(*tasks)
    return responses


def fetch_apis_in_batches(api_groups):
    # Divide APIs into batches of up to 4
    for group in api_groups:
        responses = asyncio.run(fetch_multiple_apis(group))
        # Process the responses
