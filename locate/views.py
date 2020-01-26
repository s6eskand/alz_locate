from django.shortcuts import render


# Create your views here.
def track(request):
    return render(request, 'track.html')


def login(request):
    return render(request, 'corona.html')


def create(request):
    return render(request, 'index.html')


def setup(request):
    return render(request, 'mapSetup.html')
