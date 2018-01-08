from django.contrib.auth.models import User
from rest_framework import serializers

from .models import Dance, Artist, Label, Song, Rating, Comment


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ("url", "username", "email", "date_joined")
        read_only_fields = ("date_joined", )


class DanceSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Dance
        fields = ("url", "name", "creation_user", "creation_date", "last_edit_user", "last_edit_date",)
        read_only_fields = ("creation_user", "last_edit_user",)


class ArtistSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Artist
        fields = ("url", "name", "creation_user", "creation_date", "last_edit_user", "last_edit_date",)
        read_only_fields = ("creation_user", "last_edit_user",)


class LabelSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Label
        fields = ("url", "name", "color", "creation_user", "creation_date", "last_edit_user", "last_edit_date",)
        read_only_fields = ("creation_user", "last_edit_user",)


class ShortLabelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Label
        fields = ("name", "color")


class RatingSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Rating
        fields = ("url", "song", "value", "creation_user", "creation_date", "last_edit_user", "last_edit_date",)
        read_only_fields = ("creation_user", "last_edit_user",)


class CommentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Comment
        fields = ("url", "song", "note", "creation_user", "creation_date", "last_edit_user", "last_edit_date",)
        read_only_fields = ("creation_user", "last_edit_user",)


class SongSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Song
        fields = ("url", "title", "path", "duration", "bpm", "is_on_wishlist",
                  "artist", "dance", "labels", "ratings", "comments",
                  "creation_user", "creation_date", "last_edit_user", "last_edit_date",)
        read_only_fields = ("creation_user", "last_edit_user",)


class DetailedSongSerializer(serializers.ModelSerializer):
    artist = serializers.CharField(source="artist.name")
    dance = serializers.CharField(source="dance.name")
    rating = serializers.IntegerField(source="mean_rating")
    labels = ShortLabelSerializer(many=True, read_only=True)

    class Meta:
        model = Song
        fields = ("url", "title", "duration", "bpm", "artist", "dance", "labels", "rating")
