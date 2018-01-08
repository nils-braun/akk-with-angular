from rest_framework import viewsets, permissions

from api import models, serializers


def registerToRouter(router, object_name, order_column, serializer_name=None, viewset_class=viewsets.ModelViewSet):
    if serializer_name is None:
        serializer_name = object_name + "Serializer"

    class TemporaryViewSet(viewset_class):
        queryset = getattr(models, object_name).objects.all().order_by(order_column)
        serializer_class = getattr(serializers, serializer_name)

        permission_classes = (permissions.IsAuthenticated,)

    TemporaryViewSet.__name__ = object_name + "ViewSet"
    TemporaryViewSet.__doc__ = f"API endpoint that allows {object_name.lower()}s to be viewed or edited."

    router.register(f"{object_name.lower()}s", TemporaryViewSet)