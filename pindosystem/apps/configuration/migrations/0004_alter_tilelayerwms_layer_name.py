# Generated by Django 4.2.5 on 2024-01-12 15:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('configuration', '0003_alter_categoriascapas_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tilelayerwms',
            name='layer_name',
            field=models.CharField(default='', max_length=200, verbose_name='workspace:Layer'),
        ),
    ]
