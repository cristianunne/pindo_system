# Generated by Django 4.2.5 on 2024-04-10 02:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('planificacion', '0001_initial'),
        ('intervenciones', '0002_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='intervenciones',
            name='planificacion_inter',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='intervencion_planificacion', to='planificacion.planificacionintervenciones'),
        ),
    ]
