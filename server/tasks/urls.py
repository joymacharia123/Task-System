from django.urls import path
from .views import home, register, login_view, TaskViewSet, UserViewSet


app_name= "tasks"

urlpatterns = [
    path("", home, name="home"),
    path("register/", register, name="register"),
    path("login/", login_view, name="login"),
    path("tasks/", TaskViewSet.as_view({"get": "list", "post": "create"}), name="tasks"),
    path("users/", UserViewSet.as_view({"get": "list", "post":"create"}), name="users"),
    path("tasks/<int:id>/", TaskViewSet.as_view({"get": "retrieve", "put": "update", "delete": "destroy"}), name="task-detail"),
    path("tasks/<int:id>/update_status/", TaskViewSet.as_view({"patch": "update_status"}), name="task-update-status"),
]