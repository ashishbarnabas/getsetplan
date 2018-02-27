# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . import serializers

# Create your views here.
class HelloApiView(APIView):

    serializer_class = serializers.HelloSerializer

    def get(self, request, format=None):

        return Response({'message':'testing apis'})


    def post(self, request):
        serializer = serializers.HelloSerializer(data = request.data)

        if serializer.is_valid():
            name = serializer.data.get('name')
            message = 'Hello {0}'.format(name)

            return Response({'message': message})
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)