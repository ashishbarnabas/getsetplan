from django.http import HttpResponse, request
from django.shortcuts import render

from .forms import HomepageForm 

def home_page(request):
    form = HomepageForm()
    context = {
        "title": "Homepage",
        "form": form
    }
    return render(request, 'home_page.html', context)