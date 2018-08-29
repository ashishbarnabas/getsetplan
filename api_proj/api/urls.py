from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^hello-view/', views.HelloApiView.as_view()),
    url(r'^maps/', views.MapApiView.as_view()),
]