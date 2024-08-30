from django.shortcuts import render
from django.http import JsonResponse
from .services.orchestrator import fetch_all_api_data
from .services.aarp_med import fetch_aarp_medicare_data

def get_medicare_data(request):
    data = fetch_all_api_data()
    return JsonResponse(data)

from django.shortcuts import render
from .services.orchestrator import (
    fetch_unitedhealthcare_data,
    fetch_humana_data,
)  # Import your API functions


def unitedhealthcare_view(request):
    data = fetch_unitedhealthcare_data()
    return render(request, "api/unitedhealthcare.html", {"data": data})


def humana_view(request):
    data = fetch_humana_data()
    return render(request, "api/humana.html", {"data": data})

def aarp_medicare_view(request):
    client_id = "YOUR_CLIENT_ID"  
    client_secret = "YOUR_CLIENT_SECRET"
    data = fetch_aarp_medicare_data()
    return render(request, "api/aarp_medicare.html", {"data": data})
# https://identity.onehealthcareid.com/oneapp/index.html#/login

# Repeat for other APIs...
