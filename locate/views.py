from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy
from django.views import generic
from django.contrib.auth import login, authenticate


# Create your views here.
def track(request):
    return render(request, 'track.html')


# def login(request):
#     return render(request, 'login.html')


class SignUp(generic.CreateView):
    form_class = UserCreationForm
    success_url = reverse_lazy('login')
    template_name = 'index.html'


def setup(request):
    return render(request, 'mapSetup.html')


def register(request):
    return render(request, 'register_user.html')


# def home(request):
#     return render(request, 'main_page.html')


def landing_page(request):
    return render(request, 'index2.html')
