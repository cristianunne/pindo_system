# Generated by Django 4.2.5 on 2024-10-02 19:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('emsefor', '0006_alter_emseformaquinas_cantidad'),
        ('inventario', '0001_initial'),
    ]

    operations = [
       
        migrations.AddField(
            model_name='resumenrelevamientos',
            name='ima',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='resumenrelevamientos',
            name='total',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='resumenrelevamientos',
            name='v_com',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='resumenrelevamientos',
            name='vmi_c',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='resumenrelevamientos',
            name='vmi_t',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='inventariosrelevamientos',
            name='is_finish',
            field=models.BooleanField(default=True, verbose_name='Finalizado'),
        ),
    ]
