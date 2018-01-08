import json

from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from ..models import Dance, User


class DanceTests(APITestCase):
    def setUp(self):
        self.username = 'tester'
        self.password = 'top_secret'
        self.user = User.objects.create_superuser(username=self.username, email='test@users.com',
                                                  password=self.password)

    def login(self):
        self.assertTrue(self.client.login(username="tester", password="top_secret"))

    def test_create_dance(self):
        """
        Ensure we can create a new dance object.
        """
        url = reverse('dance-list')

        response = self.client.post(url, {'name': 'My Dance'}, format='json')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

        self.login()
        response = self.client.post(url, {'name': 'My Dance'}, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Dance.objects.count(), 1)
        self.assertEqual(Dance.objects.get().name, "My Dance")
        self.assertEqual(Dance.objects.get().creation_user, self.user)
        self.assertEqual(Dance.objects.get().last_edit_user, self.user)

    def test_list_dance(self):
        Dance.objects.create(name="My Dance", creation_user=self.user, last_edit_user=self.user)
        Dance.objects.create(name="My Other Dance", creation_user=self.user, last_edit_user=self.user)

        url = reverse('dance-list')

        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

        self.login()
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        results = response.data["results"]
        self.assertEqual(len(results), 2)

    def test_update_dance(self):
        created_dance = Dance.objects.create(name="My Dance", creation_user=self.user, last_edit_user=self.user)

        url = reverse('dance-detail', args=[created_dance.id])

        response = self.client.patch(url, {'name': 'My Other Dance'}, format='json')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

        self.login()
        response = self.client.patch(url, {'name': 'My Other Dance'}, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Dance.objects.count(), 1)
        self.assertEqual(Dance.objects.get().name, "My Other Dance")
        self.assertEqual(Dance.objects.get().creation_user, self.user)
        self.assertEqual(Dance.objects.get().last_edit_user, self.user)

    def test_delete_dance(self):
        created_dance = Dance.objects.create(name="My Dance", creation_user=self.user, last_edit_user=self.user)

        url = reverse('dance-detail', args=[created_dance.id])

        response = self.client.delete(url, {'name': 'My Other Dance'}, format='json')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

        self.login()
        response = self.client.delete(url, {'name': 'My Other Dance'}, format='json')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Dance.objects.count(), 0)

