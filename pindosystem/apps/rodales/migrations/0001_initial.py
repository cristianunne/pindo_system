# Generated by Django 4.2.5 on 2024-01-11 05:17

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('empresas', '0001_initial'),
        ('configuration', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Rodales',
            fields=[
                ('rodales_id', models.AutoField(primary_key=True, serialize=False)),
                ('cod_sap', models.CharField(blank=True, max_length=100, unique=True, verbose_name='Código')),
                ('campo', models.CharField(blank=True, max_length=100, verbose_name='Campo')),
                ('is_certificado', models.BooleanField(default=False, verbose_name='Certificado')),
                ('is_finish', models.BooleanField(default=False, verbose_name='Finalizado')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
                ('empresa', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='empresas_rodales', to='empresas.empresas')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='user_created_rodales', to=settings.AUTH_USER_MODEL)),
                ('usos_rodales', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='usos_rodales_category', to='configuration.usosrodales')),
            ],
        ),
    ]
