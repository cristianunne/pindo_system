# Generated by Django 4.2.5 on 2024-04-04 12:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('empresas', '0003_alter_empresas_name_alter_empresas_sap_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='empresas',
            name='sap_id',
            field=models.CharField(max_length=100, unique=True, verbose_name='sap_id'),
        ),
    ]
