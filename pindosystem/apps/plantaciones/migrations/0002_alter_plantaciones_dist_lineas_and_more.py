# Generated by Django 4.2.5 on 2024-04-18 09:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('plantaciones', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='plantaciones',
            name='dist_lineas',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='plantaciones',
            name='dist_plantas',
            field=models.FloatField(blank=True, null=True),
        ),
    ]
