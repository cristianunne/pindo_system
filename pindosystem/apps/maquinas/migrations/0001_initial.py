# Generated by Django 4.2.5 on 2024-01-11 05:17

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Maquinas',
            fields=[
                ('maquinas_id', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(blank=True, max_length=100, verbose_name='Nombre')),
                ('marca', models.CharField(blank=True, max_length=50, verbose_name='Marca')),
                ('modelo', models.CharField(blank=True, max_length=50, verbose_name='Modelo')),
                ('image', models.FileField(max_length=250, upload_to='maquinas_files/', verbose_name='Files')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='user_created', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
