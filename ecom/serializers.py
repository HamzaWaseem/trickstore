from rest_framework import serializers
from .models import Product, Category, HeroSection

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'slug', 'image']

class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    final_price = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = ['id', 'name', 'product_image', 'price', 'discount', 
                 'category', 'free_delivery', 'final_price']

    def get_final_price(self, obj):
        return obj.final_price()

class HeroSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeroSection
        fields = ['title', 'description', 'button_text', 'background_image'] 