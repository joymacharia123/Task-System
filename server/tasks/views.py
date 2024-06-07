from rest_framework import viewsets, status
from .models import Task
from .serializers import TaskSerializer, UserSerializer, RegisterSerializer
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.decorators import api_view, action
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate

# ViewSet for managing tasks
@api_view(["GET"])
def home(request):
    return Response({
        "message": "Hello World"
    })

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    lookup_field = 'id'

    @action(detail=True, methods=['patch'])
    def update_status(self, request, id=None):
        task = self.get_object()
        is_complete = request.data.get('is_complete')
        if is_complete is not None:
            task.is_complete = is_complete
            task.save()
            serializer = TaskSerializer(task)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({"message": "Invalid data"}, status=status.HTTP_400_BAD_REQUEST)


# ViewSet for managing users
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

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
            last_name=last_name,
            password=password
        )
        user.save()
        token = Token.objects.create(user=user)

        return Response({
            "message" : "User created successfully.",
            "token" : token.key
        }, status=status.HTTP_201_CREATED)

# View for user login
@api_view(['POST'])
def login_view(request):
    if request.method == 'POST':
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(request, username=username, password=password)

        if user is not None:
            serializer = UserSerializer(user)
            token, created = Token.objects.get_or_create(user=user)
            return Response({
                "message" : "User logged in successfully.",
                "user" : serializer.data,
                "session" : token.key
            }, status=status.HTTP_200_OK)
        else:
            return Response({
                "message" : "Could not validate user."
            }, status=status.HTTP_400_BAD_REQUEST)
