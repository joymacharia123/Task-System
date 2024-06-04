from django.urls import path
from .views import home, register


app_name= "tasks"

urlpatterns = [
    path("", home, name="home"),
    # path("signin/", signin, name="signin"),
    path("register/", register, name="register"),
    # path("tasks/", TaskViewSet.as_view(), name="tasks"),
]