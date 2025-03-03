from django.urls import path
from . import views

urlpatterns = [
    path('home-data/', views.api_home_data, name='api-home-data'),
    path('cart-count/', views.api_cart_count, name='api-cart-count'),
    # ... other URL patterns
] 