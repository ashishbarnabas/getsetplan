# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.http import HttpResponse, request
from django.shortcuts import render

def index(request):
    return HttpResponse('Results Page')
