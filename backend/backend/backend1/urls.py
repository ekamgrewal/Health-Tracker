from django.urls import path
from django.views.generic import TemplateView

app_name = "backend1"

urlpatterns = [
    path('', TemplateView.as_view(template_name="backend1/index.html")),
]

