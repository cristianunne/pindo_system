# Generated by Django 4.2.5 on 2024-04-25 04:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('emsefor', '0004_alter_emsefor_maquinas'),
    ]

    operations = [
        migrations.AlterField(
            model_name='emseformaquinas',
            name='cantidad',
            field=models.IntegerField(blank=True, null=True, verbose_name='Cantidad'),
        ),
    ]