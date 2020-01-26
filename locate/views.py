from django.shortcuts import render


# Create your views here.
def track(request):
    return render(request, 'track.html')


def login(request):
    return render(request, 'login.html')


def create(request):
    return render(request, 'index.html')


def setup(request):
    return render(request, 'mapSetup.html')


def register(request):
    return render(request, 'register_user.html')


def home(request):
    return render(request, 'main_page.html')
