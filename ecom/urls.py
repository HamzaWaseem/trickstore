from django.urls import path, re_path
from . import views
from django.views.decorators.csrf import csrf_exempt
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title="E-commerce API",
        default_version='v1',
        description="API documentation for the e-commerce platform",
        terms_of_service="https://www.yourapp.com/terms/",
        contact=openapi.Contact(email="contact@yourapp.com"),
        license=openapi.License(name="Your License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('home-data/', views.api_home_data, name='api-home-data'),
    path('cart-count/', views.api_cart_count, name='api-cart-count'),
    path('api/admin/login/', csrf_exempt(views.admin_login), name='admin-login'),
    path('api/admin/products/', views.admin_products, name='admin-products'),
    path('api/admin/categories/', views.admin_categories, name='admin-categories'),
    re_path(r'^swagger(?P<format>\.json|\.yaml)$', 
        schema_view.without_ui(cache_timeout=0), 
        name='schema-json'),
    path('swagger/', 
        schema_view.with_ui('swagger', cache_timeout=0), 
        name='schema-swagger-ui'),
    path('redoc/', 
        schema_view.with_ui('redoc', cache_timeout=0), 
        name='schema-redoc'),
] 