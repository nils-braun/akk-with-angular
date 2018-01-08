from rest_framework import routers, viewsets, mixins, permissions

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


router = routers.DefaultRouter()

registerToRouter(router, "User", order_column="username")
registerToRouter(router, "Label", order_column="name", viewset_class=CreationUserStorer)
registerToRouter(router, "Artist", order_column="name", viewset_class=CreationUserStorer)
registerToRouter(router, "Dance", order_column="name", viewset_class=CreationUserStorer)
registerToRouter(router, "Rating", order_column="id", viewset_class=CreationUserStorer)
registerToRouter(router, "Comment", order_column="id", viewset_class=CreationUserStorer)
registerToRouter(router, "Song", order_column="title", viewset_class=CreationUserStorer)


class DetailedSongList(mixins.ListModelMixin, viewsets.GenericViewSet):
    serializer_class = serializers.DetailedSongSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        # TODO: include sorting/filtering
        return models.Song.objects.all().order_by("id")


router.register("detailed-songs", DetailedSongList, base_name="detailed-songs")

