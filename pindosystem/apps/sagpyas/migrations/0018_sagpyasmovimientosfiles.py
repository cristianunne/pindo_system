# Generated by Django 4.2.5 on 2024-08-08 07:48

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('sagpyas', '0017_delete_sagpyasmovimientosfiles'),
    ]

    operations = [
        migrations.CreateModel(
            name='SagpyasMovimientosFiles',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.FileField(max_length=200, upload_to='sagpyas_files/', verbose_name='Files')),
                ('name', models.CharField(blank=True, max_length=200, verbose_name='Nombre')),
                ('type', models.CharField(blank=True, max_length=20, verbose_name='Tipo')),
                ('size', models.FloatField(blank=True, null=True, verbose_name='Tamaño')),
                ('description', models.CharField(blank=True, max_length=3000, verbose_name='Description')),
                ('url', models.CharField(blank=True, max_length=255, verbose_name='URL')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('sagpyamov', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sagpyasmov_files', to='sagpyas.sagpyasmovimientos')),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='user_sagpyasmov_files', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]