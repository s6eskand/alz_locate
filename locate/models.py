from django.db import models


# Create your models here.
class User(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    name = models.CharField(max_length=100, default="noname")
    state = models.CharField(max_length=100, default="stable")
    age = models.IntegerField(default=0)
