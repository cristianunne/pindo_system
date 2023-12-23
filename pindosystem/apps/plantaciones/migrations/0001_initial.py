# Generated by Django 4.2.5 on 2023-12-22 07:42

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('procedencias', '0001_initial'),
        ('emsefor', '0001_initial'),
        ('rodales', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Plantaciones',
            fields=[
                ('plantaciones_id', models.AutoField(primary_key=True, serialize=False)),
                ('fecha', models.DateTimeField()),
                ('superficie', models.FloatField(blank=True, null=True)),
                ('densidad', models.FloatField(blank=True, null=True)),
                ('dist_lineas', models.IntegerField(blank=True, null=True)),
                ('dist_plantas', models.IntegerField(blank=True, null=True)),
                ('arboles_plantados', models.IntegerField(blank=True, null=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
                ('emsefors', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='plantacion_emsefor', to='emsefor.emsefor')),
                ('procedencias', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='plantacion_procedencias', to='procedencias.procedencias')),
                ('rodales', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='rodales_plantaciones', to='rodales.rodales')),
                ('users', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='user_created_plantaciones', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
