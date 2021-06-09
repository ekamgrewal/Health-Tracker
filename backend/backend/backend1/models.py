from django.db import models 
from django.utils import timezone
from django.conf import settings


class data(models.Model):
    weight = models.IntegerField()
    calories_in = models.IntegerField()
    calories_out = models.IntegerField()
    heartrate = models.IntegerField()
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='info')
    objects = models.Manager()


    

    