# Generated by Django 3.0.2 on 2020-01-26 09:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('locate', '0002_auto_20200126_0438'),
    ]

    operations = [
        migrations.CreateModel(
            name='Care',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
                ('age', models.IntegerField(default=0)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='locate.User')),
            ],
        ),
    ]
