from django.shortcuts import render


# Create your views here.
def track(request):
    return render(request, 'track.html')


def login(request):
    return render(request, 'corona.html')
