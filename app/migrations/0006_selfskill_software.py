# Generated by Django 2.2.16 on 2020-09-26 08:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_auto_20200926_1639'),
    ]

    operations = [
        migrations.CreateModel(
            name='Selfskill',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('thumbnail', models.ImageField(blank=True, null=True, upload_to='images', verbose_name='サムネイル')),
                ('name', models.CharField(max_length=100, verbose_name='セルフスキル')),
                ('percentage', models.IntegerField(verbose_name='パーセンテージ')),
            ],
        ),
        migrations.CreateModel(
            name='Software',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('thumbnail', models.ImageField(blank=True, null=True, upload_to='images', verbose_name='サムネイル')),
                ('name', models.CharField(max_length=100, verbose_name='ソフトウェア')),
                ('percentage', models.IntegerField(verbose_name='パーセンテージ')),
            ],
        ),
    ]
