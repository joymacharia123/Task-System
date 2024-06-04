from django.urls import path
from .views import home, signin, register, tasks

urlpatterns = [
    path("", home, name="home"),
    path("signin/", signin, name="signin"),
    path("register/", register, name="register"),
    path("tasks/", tasks, name="tasks"),
    
    
]