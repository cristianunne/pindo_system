# Generated by Django 4.2.5 on 2024-04-17 12:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rodales', '0003_remove_rodales_objnr_rodales_sap_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='rodales',
            name='name',
            field=models.CharField(blank=True, max_length=100, verbose_name='Nombre'),
        ),
    ]
