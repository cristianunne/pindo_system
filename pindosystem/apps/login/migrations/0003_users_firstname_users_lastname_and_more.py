# Generated by Django 4.2.5 on 2023-09-26 21:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0002_alter_users_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='users',
            name='firstname',
            field=models.CharField(blank=True, max_length=100, verbose_name='Nombres'),
        ),
        migrations.AddField(
            model_name='users',
            name='lastname',
            field=models.CharField(blank=True, max_length=100, verbose_name='Apellidos'),
        ),
        migrations.AlterField(
            model_name='users',
            name='first_name',
            field=models.CharField(blank=True, max_length=150, verbose_name='first name'),
        ),
        migrations.AlterField(
            model_name='users',
            name='last_name',
            field=models.CharField(blank=True, max_length=150, verbose_name='last name'),
        ),
    ]
