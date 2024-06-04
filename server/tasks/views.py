from rest_framework import viewsets, generics
from .models import Task
from .serializers import TaskSerializer, UserSerializer, RegisterSerializer
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.authtoken.models import Token

# ViewSet for managing tasks
@api_view(["GET"])
def home(request):
    return Response({
        "message": "Hello World"
    })
# class TaskViewSet(viewsets.ModelViewSet):
#     queryset = Task.objects.all()
#     serializer_class = TaskSerializer

# # ViewSet for managing users
# class UserViewSet(viewsets.ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer

# View for user registration
@api_view(["POST"])
def register(request):
    if request.method == 'POST':
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')
        first_name = request.data.get('first_name')
        last_name = request.data.get('last_name')

        user = User.objects.filter(username=username)
        if user.exists():
            return Response({"message" : "User already exists."}, status=status.HTTP_400_BAD_REQUEST)
        
        user = User.objects.create_user(
            username=username,
            email=email,
            first_name=first_name,
            last_name=last_name
        )
        user.set_password(password)
        user.save()
        token = Token.objects.create(user=user)

        return Response({
            "message" : "User created successfully.",
            "token" : token.key
        })
