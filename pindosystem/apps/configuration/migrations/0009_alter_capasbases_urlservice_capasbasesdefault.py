# Generated by Django 4.2.5 on 2024-01-09 15:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('configuration', '0008_rename_nombre_capasbases_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='capasbases',
            name='urlservice',
            field=models.CharField(default='', max_length=1000, verbose_name='URL del Servicio'),
        ),
        migrations.CreateModel(
            name='CapasBasesDefault',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('capabase', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='capasbase_default_cb', to='configuration.capasbases')),
            ],
        ),
    ]
