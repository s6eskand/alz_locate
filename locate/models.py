from django.db import models


# Create your models here.
class Username(models.Model):
    user_name = models.CharField(max_length=100)


class Password(models.Model):
    user = models.ForeignKey(Username, on_delete=models.CASCADE)
    password = models.CharField(max_length=100)
