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
    loved_ones = []
    name = request.method.POST.get("username")
    condition = request.method.POST.get("cond")
    age = request.method.POST.get("age")

    Care.objects.create(name=name, condition=condition, age=age)
    loved_ones.append(name, condition, age)

    stuff_for_frontend = {
        "loved_ones": loved_ones,
    }

    return render(request, stuff_for_frontend, 'register_user.html')


def home(request):
    loved_ones = []

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
