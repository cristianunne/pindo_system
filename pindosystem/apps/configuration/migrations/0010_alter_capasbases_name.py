# Generated by Django 4.2.5 on 2024-02-12 18:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('configuration', '0009_alter_capasbasesdefault_capabase'),
    ]

    operations = [
        migrations.AlterField(
            model_name='capasbases',
            name='name',
            field=models.CharField(max_length=100, verbose_name='nombre'),
        ),
    ]
