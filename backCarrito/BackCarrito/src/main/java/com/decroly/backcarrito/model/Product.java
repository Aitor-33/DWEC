package com.decroly.backcarrito.model;

public class Product
{
    private String SKU;
    private String title;
    private String price;
    private String image;

    Product(String SKU, String title, String price, String image)
    {
        this.SKU = SKU;
        this.title = title;
        this.price = price;
        this.image = image;
    }

    public String getSku() {
        return SKU;
    }

    public String getTitle() {
        return title;
    }

    public String getPrice() {
        return price;
    }

    public String getImage() {
        return image;
    }

    
}
