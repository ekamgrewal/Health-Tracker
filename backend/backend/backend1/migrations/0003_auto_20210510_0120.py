# Generated by Django 3.2 on 2021-05-10 08:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend1', '0002_data_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='data',
            name='carbs',
        ),
        migrations.RemoveField(
            model_name='data',
            name='fat',
        ),
        migrations.RemoveField(
            model_name='data',
            name='protein',
        ),
    ]
