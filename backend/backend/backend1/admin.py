from django.contrib import admin
from . import models
# Register your models here.

@admin.register(models.data)
class UserAdmin(admin.ModelAdmin):
    data_display = ('user', 'weight')
# Register your models here.
