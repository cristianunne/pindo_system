# Generated by Django 4.2.5 on 2024-02-12 20:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('empresas', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='empresas',
            name='sap_id',
            field=models.CharField(blank=True, max_length=100, verbose_name='sap_id'),
        ),
    ]
