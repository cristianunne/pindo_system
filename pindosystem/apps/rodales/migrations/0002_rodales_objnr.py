# Generated by Django 4.2.5 on 2024-02-12 18:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rodales', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='rodales',
            name='objnr',
            field=models.CharField(blank=True, max_length=100, verbose_name='Objnr'),
        ),
    ]