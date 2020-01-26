from django.urls import path
from . import views

urlpatterns = [
    path('track/', views.track, name='track'),
    path('login/', views.login, name='login'),
    path('create/', views.create, name='create'),
    path('setup/', views.setup, name='setup'),
]
