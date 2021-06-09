from django.urls import path
from .views import dataList, dataDetail
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

app_name = "backend_api"

urlpatterns = [
    path('<int:pk>/', dataDetail.as_view(), name='detailcreate'),
    path('', dataList.as_view(), name='listcreate'),
    
]


