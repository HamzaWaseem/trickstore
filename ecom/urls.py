from django.urls import path
from . import views
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('home-data/', views.api_home_data, name='api-home-data'),
    path('cart-count/', views.api_cart_count, name='api-cart-count'),
    path('api/admin/login/', csrf_exempt(views.admin_login), name='admin-login'),
    path('api/admin/products/', views.admin_products, name='admin-products'),
    path('api/admin/categories/', views.admin_categories, name='admin-categories'),
    # ... other URL patterns
] 