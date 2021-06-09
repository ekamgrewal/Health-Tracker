from rest_framework import serializers
from backend1.models import data

class dataSerializer(serializers.ModelSerializer):
    class Meta:
        model = data
        fields = ('user', 'weight', 'calories_in', 'calories_out', 'heartrate' )