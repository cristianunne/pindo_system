# Generated by Django 4.2.5 on 2023-12-11 17:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rodales_gis', '0002_alter_rodalesgis_chacra_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rodalesgis',
            name='area',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='rodalesgis',
            name='perimetro',
            field=models.FloatField(blank=True, null=True),
        ),
    ]
