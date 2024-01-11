# Generated by Django 4.2.5 on 2024-01-11 05:17

import django.contrib.gis.db.models.fields
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('rodales', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Rodalesgis',
            fields=[
                ('rodalesgis_id', models.AutoField(primary_key=True, serialize=False)),
                ('area', models.FloatField(blank=True, null=True)),
                ('perimetro', models.FloatField(blank=True, null=True)),
                ('departamento', models.CharField(blank=True, max_length=100, null=True, verbose_name='Departamento')),
                ('municipio', models.CharField(blank=True, max_length=100, null=True, verbose_name='Municipio')),
                ('seccion', models.CharField(blank=True, max_length=100, null=True, verbose_name='Sección')),
                ('chacra', models.CharField(blank=True, max_length=100, null=True, verbose_name='Chacra')),
                ('manzana', models.CharField(blank=True, max_length=100, null=True, verbose_name='Manzana')),
                ('parcela', models.CharField(blank=True, max_length=100, null=True, verbose_name='Parcela')),
                ('subparcela', models.CharField(blank=True, max_length=100, null=True, verbose_name='Subparcela')),
                ('partida', models.CharField(blank=True, max_length=100, null=True, verbose_name='Partida')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
                ('geom', django.contrib.gis.db.models.fields.MultiPolygonField(blank=True, null=True, srid=5349)),
                ('geom_4326', django.contrib.gis.db.models.fields.MultiPolygonField(blank=True, null=True, srid=4326)),
                ('rodales', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='rodales_rodales_gis', to='rodales.rodales')),
            ],
        ),
    ]
