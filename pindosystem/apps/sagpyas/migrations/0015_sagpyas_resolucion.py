# Generated by Django 4.2.5 on 2024-08-07 00:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sagpyas', '0014_sagpyasrodales_tarea'),
    ]

    operations = [
        migrations.AddField(
            model_name='sagpyas',
            name='resolucion',
            field=models.CharField(blank=True, max_length=250, verbose_name='Resolucion'),
        ),
    ]
