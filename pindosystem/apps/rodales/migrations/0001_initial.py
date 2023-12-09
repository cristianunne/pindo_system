# Generated by Django 4.2.5 on 2023-12-08 05:13

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('configuration', '0002_rename_nombre_usosrodales_name'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Rodales',
            fields=[
                ('rodales_id', models.AutoField(primary_key=True, serialize=False)),
                ('cod_sap', models.CharField(blank=True, max_length=100, verbose_name='Código')),
                ('campo', models.CharField(blank=True, max_length=100, verbose_name='Campo')),
                ('is_certificado', models.BooleanField(default=False, verbose_name='Certificado')),
                ('is_finish', models.BooleanField(default=False, verbose_name='Finalizado')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='user_created_rodales', to=settings.AUTH_USER_MODEL)),
                ('usos_rodales', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='usos_rodales_category', to='configuration.usosrodales')),
            ],
        ),
    ]
