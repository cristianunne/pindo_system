# Generated by Django 4.2.5 on 2024-02-12 20:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('empresas', '0002_empresas_sap_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='empresas',
            name='name',
            field=models.CharField(blank=True, max_length=100, verbose_name='Nombre de la Empresa'),
        ),
        migrations.AlterField(
            model_name='empresas',
            name='sap_id',
            field=models.CharField(max_length=100, verbose_name='sap_id'),
        ),
    ]
