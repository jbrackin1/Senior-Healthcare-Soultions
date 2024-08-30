# backend/api/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path("unitedhealthcare/", views.unitedhealthcare_view, name="unitedhealthcare"),
    path("humana/", views.humana_view, name="humana"),
    path("aetna/", views.aetna_view, name="aetna"),
    path("peoples_health/", views.peoples_health_view, name="peoples_health"),
    path(
        "blue_cross_blue_shield/",
        views.blue_cross_blue_shield_view,
        name="blue_cross_blue_shield",
    ),
    path("cigna/", views.cigna_view, name="cigna"),
    path("anthem/", views.anthem_view, name="anthem"),
    path("kaiser_permanente/", views.kaiser_permanente_view, name="kaiser_permanente"),
    path("wellcare/", views.wellcare_view, name="wellcare"),
    path("aarp_medicare/", views.aarp_medicare_view, name="aarp_medicare"),
    path("careplus/", views.careplus_view, name="careplus"),
    path("", views.comparison_view, name="comparison"),  # Main comparison page
]
