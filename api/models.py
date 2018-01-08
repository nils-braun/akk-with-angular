from django.core.validators import RegexValidator, MaxValueValidator, MinValueValidator
from django.db import models

from django.contrib.auth.models import User


class CreatableModel(models.Model):
    creation_user = models.ForeignKey(User, on_delete=models.PROTECT, related_name="creation_user_set+", blank=False)
    creation_date = models.DateTimeField(auto_now_add=True, editable=False)

    last_edit_user = models.ForeignKey(User, on_delete=models.PROTECT, related_name="last_edit_user_set+", blank=False)
    last_edit_date = models.DateTimeField(auto_now=True, editable=False)

    class Meta:
        abstract = True


class Dance(CreatableModel):
    """
    Class representing a dance type.
    """
    name = models.CharField("Name for the dance", max_length=100, unique=True)


class Artist(CreatableModel):
    """
    Class representing an artist.
    """
    name = models.CharField("Name for the artist", max_length=100, unique=True)


class Label(CreatableModel):
    """
    Class representing a label.
    """
    name = models.CharField("Name for the label", max_length=100, unique=True)
    color = models.CharField(max_length=6, validators=[RegexValidator(r"^[0-9a-f]+$")])


class Song(CreatableModel):
    """
    Class representing a song.
    """
    title = models.CharField(max_length=350)
    path = models.CharField(max_length=500, default="", blank=True)
    duration = models.TimeField()
    bpm = models.IntegerField()

    artist = models.ForeignKey(Artist, on_delete=models.PROTECT, related_name="songs")
    dance = models.ForeignKey(Dance, on_delete=models.PROTECT)

    is_on_wishlist = models.BooleanField(default=False)

    labels = models.ManyToManyField(Label, blank=True)

    @property
    def mean_rating(self):
        rating_values = [rating.value for rating in self.ratings.all()]
        return sum(rating_values) / len(rating_values) if rating_values else None

    class Meta:
        unique_together = ("artist", "dance", "title")


class Rating(CreatableModel):
    value = models.IntegerField(validators=[MaxValueValidator(5), MinValueValidator(0)])

    song = models.ForeignKey(Song, on_delete=models.PROTECT, blank=False, related_name="ratings")

    class Meta:
        unique_together = ("creation_user", "song")


class Comment(CreatableModel):
    note = models.CharField(max_length=1000)

    song = models.ForeignKey(Song, on_delete=models.PROTECT, blank=False, related_name="comments")

    class Meta:
        unique_together = ("creation_user", "song")
