from django.urls import path
from .views import home, signin, register, tasks

urlpatterns = [
    path("", home, name="home"), #this makes a get request and executes the home function
    path("signin/", signin, name="signin"),
    path("register/", register, name="register"),
    path("tasks/", tasks, name="tasks"),
    
    
]