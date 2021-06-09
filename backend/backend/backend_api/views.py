from rest_framework import generics
from backend1.models import data
from .serializers import dataSerializer
from rest_framework import viewsets, filters, generics, permissions
from rest_framework.permissions import SAFE_METHODS, BasePermission, IsAdminUser, DjangoModelPermissions, IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from rest_framework import status

# Create your views here.

class dataUserWritePermission(BasePermission):
    message = 'Only the user can edit their data.'

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        
        return obj.user == request.user


class dataList(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [AllowAny]
    queryset = data.objects.all()
    serializer_class = dataSerializer
  


class dataDetail(generics.RetrieveUpdateDestroyAPIView, dataUserWritePermission):
    permission_classes = [AllowAny]
    queryset = data.objects.all()
    serializer_class = dataSerializer

    def post(self,request,pk):
        serializer_class = dataSerializer(data = request.data)
        if serializer_class.is_valid():
            serializer_class.save()
            return Response(serializer_class.data, status=status.HTTP_201_CREATED)
        return Response(serializer_class.errors, status=status.HTTP_400_BAD_REQUEST)

