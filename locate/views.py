from django.shortcuts import render
from .models import User, Care


# Create your views here.
def track(request):
    return render(request, 'track.html')


def login(request):
    return render(request, 'registration/login.html')


def create(request):
    return render(request, 'index.html')


def setup(request):
    return render(request, 'mapSetup.html')


def register(request):
    return render(request, 'register_user.html')


def home(request):
    if request.method == "POST":
        first_name = request.POST.get("firstname")
        last_name = request.POST.get("lastname")
        User.objects.create(first_name=first_name, last_name=last_name)
        stuff_for_frontend = {
            "first_name": first_name,
            "last_name": last_name,
        }
    else:
        stuff_for_frontend = {}

    return render(
        request,
        'main_page.html',
        stuff_for_frontend,
    )


def landing_page(request):
    return render(request, 'index2.html')
