from rest_framework import routers, viewsets, mixins, permissions
from rest_framework.response import Response
from rest_framework.serializers import HyperlinkedModelSerializer, CharField

from api import models, serializers
from api.view_set_factory import registerToRouter


class CreationUserStorer(viewsets.ModelViewSet):
    def perform_create(self, serializer):
        """Whenever the entity is created, set the creation user and the last edit user"""
        user = self.request.user
        assert not user.is_anonymous

        serializer.save(creation_user=user, last_edit_user=user)

    def perform_update(self, serializer):
        """Whenever the entity is updated, set the last edit user"""
        user = self.request.user
        assert not user.is_anonymous

        serializer.save(last_edit_user=user)


class DetailedSongList(mixins.ListModelMixin, viewsets.GenericViewSet):
    serializer_class = serializers.DetailedSongSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        # TODO: include sorting/filtering
        request = self.request
        return models.Song.objects.all().order_by("id")


class SearchViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = ""

    def serialize_query(self, model_class, name, query_string):
        query = model_class.objects.order_by(name)

        if query_string:
            query = query.filter(**{name + "__contains": query_string})

        query = query.all()[:3]

        class ShortSerializer(HyperlinkedModelSerializer):
            key = CharField(read_only=True, source=name)

            class Meta:
                model = model_class
                fields = ("url", "key",)

        serializer = ShortSerializer(query, many=True, context=self.get_serializer_context())
        return serializer.data

    def list(self, request, *args, **kwargs):
        query = request.query_params.get("query", None)
        data = (self.serialize_query(models.Dance, "name", query) +
                self.serialize_query(models.Artist, "name", query) +
                self.serialize_query(models.Label, "name", query) +
                self.serialize_query(models.Song, "title", query))
        return Response(data)


router = routers.DefaultRouter()

registerToRouter(router, "User", order_column="username")
registerToRouter(router, "Label", order_column="name", viewset_class=CreationUserStorer)
registerToRouter(router, "Artist", order_column="name", viewset_class=CreationUserStorer)
registerToRouter(router, "Dance", order_column="name", viewset_class=CreationUserStorer)
registerToRouter(router, "Rating", order_column="id", viewset_class=CreationUserStorer)
registerToRouter(router, "Comment", order_column="id", viewset_class=CreationUserStorer)
registerToRouter(router, "Song", order_column="title", viewset_class=CreationUserStorer)

router.register("query", DetailedSongList, base_name="query")
router.register("search", SearchViewSet, base_name="search")
