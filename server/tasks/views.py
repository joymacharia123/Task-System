from rest_framework import viewsets, generics
from .models import Task
from .serializers import TaskSerializer, UserSerializer, RegisterSerializer
from django.contrib.auth.models import User

# ViewSet for managing tasks
class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

# ViewSet for managing users
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# View for user registration
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
