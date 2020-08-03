from django.shortcuts import render

# Create your views here.
def home(request):
    context = {

    }

    return render(request, 'home.html', context)

def software_work(request):
    context = {

    }

    return render(request, 'software_work.html', context)

def other_work(request):
    context = {

    }

    return render(request, 'other_work.html', context)

def about_me(request):
    context = {

    }

    return render(request, 'about_me.html', context)

def contact_me(request):
    context = {

    }

    return render(request, 'contact_me.html', context)