# Generated by Django 4.2.5 on 2024-01-11 05:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CapasBases',
            fields=[
                ('idcapasbase', models.BigAutoField(primary_key=True, serialize=False)),
                ('urlservice', models.CharField(default='', max_length=1000, verbose_name='URL del Servicio')),
                ('attribution', models.CharField(blank=True, max_length=500, null=True, verbose_name='Atribuciones')),
                ('subdomain', models.CharField(blank=True, max_length=200, null=True, verbose_name='Subdominio')),
                ('min_zoom', models.IntegerField(blank=True, null=True)),
                ('max_zoom', models.IntegerField(blank=True, null=True)),
                ('format', models.CharField(blank=True, max_length=50, null=True, verbose_name='Formato')),
                ('time', models.CharField(blank=True, max_length=100, null=True, verbose_name='Time')),
                ('tilematrixset', models.CharField(blank=True, max_length=100, null=True, verbose_name='tilematrixset')),
                ('opacity', models.FloatField(blank=True, null=True)),
                ('active', models.BooleanField(default=False, verbose_name='active')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(max_length=100, verbose_name='nombfgfre')),
            ],
        ),
        migrations.CreateModel(
            name='CapasBasesDefault',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='CategoriasCapas',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=50, null=True, verbose_name='Categoria')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='IntervencionesTypes',
            fields=[
                ('intervencionestypes_id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, max_length=100, unique=True, verbose_name='Nombre')),
                ('color', models.CharField(blank=True, max_length=100, unique=True, verbose_name='Color')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='InventariosTypes',
            fields=[
                ('inventariostypes_id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, max_length=100, unique=True, verbose_name='Nombre')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='MapConfigGis',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('crs', models.CharField(blank=True, default='L.CRS.EPSG3857', max_length=45, null=True, verbose_name='CRS')),
                ('center_x', models.FloatField()),
                ('center_y', models.FloatField()),
                ('zoom', models.FloatField()),
                ('min_zoom', models.IntegerField(blank=True, null=True)),
                ('max_zoom', models.IntegerField(blank=True, null=True)),
                ('renderer', models.BooleanField(blank=True, default=False, null=True, verbose_name='Tipo de Renderizacion')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='ServiciosIDEConfig',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=100, null=True, verbose_name='Nombre')),
                ('url', models.CharField(blank=True, max_length=1000, null=True, verbose_name='URL del Servicio')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='TileLayerWMS',
            fields=[
                ('idlayer', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100, verbose_name='nombre')),
                ('layer_name', models.CharField(default='', max_length=200, verbose_name='Layer')),
                ('styles', models.CharField(blank=True, max_length=255, null=True, verbose_name='styles')),
                ('format', models.CharField(default='image/jpeg', max_length=50, verbose_name='Formato')),
                ('transparent', models.BooleanField(default=True, verbose_name='transparent')),
                ('version', models.CharField(blank=True, max_length=30, null=True, verbose_name='version')),
                ('crs', models.CharField(blank=True, max_length=50, null=True, verbose_name='crs')),
                ('uppercase', models.BooleanField(blank=True, null=True, verbose_name='uppercase')),
                ('min_zoom', models.IntegerField(blank=True, null=True)),
                ('max_zoom', models.IntegerField(blank=True, null=True)),
                ('opacity', models.FloatField(blank=True, null=True)),
                ('attribution', models.CharField(blank=True, max_length=500, null=True, verbose_name='Atribuciones')),
                ('active', models.BooleanField(default=False, verbose_name='active')),
                ('tiles_size', models.IntegerField(blank=True, null=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Usosrodales',
            fields=[
                ('usosrodales_id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, max_length=100, unique=True, verbose_name='Nombre')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
