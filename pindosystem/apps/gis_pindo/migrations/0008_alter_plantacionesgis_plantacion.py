# Generated by Django 4.2.5 on 2023-12-19 16:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('plantaciones', '0007_alter_plantaciones_fecha'),
        ('gis_pindo', '0007_podaintervenciongis_poda_intervencion_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='plantacionesgis',
            name='plantacion',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='plantacion_plantaciongis', to='plantaciones.plantaciones'),
        ),
    ]
