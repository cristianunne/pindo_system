# Generated by Django 4.2.5 on 2024-09-02 10:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('inventario', '0005_remove_arbolesrelevamientoothers_damages_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='arbolesrelevamientopoda',
            name='relevamentos',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='invrel_arb_poda', to='inventario.inventariosrelevamientos'),
        ),
    ]
