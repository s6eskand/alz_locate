from django.shortcuts import render
from .models import User


# Create your views here.
def track(request):
    return render(request, 'track.html')


def login(request):
    return render(request, 'registration/login.html')


def create(request):
    return render(request, 'index.html')


def setup(request):
    return render(request, 'mapSetup.html')


# def register(request):
#     return render(request, 'register_user.html')


def home(request):
    loved_ones = []

    if request.method == "POST":
        first_name = request.POST.get("firstname")
        last_name = request.POST.get("lastname")
        name = request.POST.get("name")
        state = request.POST.get("cond")
        age = request.POST.get("age")

        User.objects.create(first_name=first_name, last_name=last_name, name=name, state=state, age=age)

        loved_ones.append((name, state, age))

        stuff_for_frontend = {
            "first_name": first_name,
            "last_name": last_name,
            "loved_ones": loved_ones,
        }
    else:
        stuff_for_frontend = {
            "loved_ones": loved_ones,
        }

    return render(
        request,
        'main_page.html',
        stuff_for_frontend,
    )


def landing_page(request):
    return render(request, 'index2.html')
