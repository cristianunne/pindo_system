# Generated by Django 4.2.5 on 2024-09-16 23:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('inventario', '0013_inventariosrelevamientos_user_relevador'),
    ]

    operations = [
        migrations.AddField(
            model_name='arbolesrelevamientopoda',
            name='observaciones',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='obser_arb_poda', to='inventario.inventariosobservaciones'),
        ),
    ]
