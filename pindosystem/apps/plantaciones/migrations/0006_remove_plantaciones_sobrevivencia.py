# Generated by Django 4.2.5 on 2023-12-19 01:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('plantaciones', '0005_remove_plantaciones_plantaciones_gis'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='plantaciones',
            name='sobrevivencia',
        ),
    ]
