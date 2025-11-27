package com.decroly.backcarrito.model;

import java.util.ArrayList;
import java.util.List;

public class Shop
{
    private String currency;
    private List<Product> products;

    public Shop(String currency) {
        this.currency = currency;
        this.products = new ArrayList<>();

        // Inserto productos en la tienda
        this.products.add(new Product("0K3QOSOV4V","iFhone 13 Pro","938.99","https://www.maxmovil.com/media/catalog/product/cache/2c055c968235f5bf43b443aee4bb62c6/i/p/iphone_13_negro_0001_616dwfinzll._ac_sl1500__2.jpg"));
        this.products.add(new Product("TGD5XORY1L","Cargador","49.99","https://storage.googleapis.com/catalog-pictures-carrefour-es/catalog/pictures/hd_510x_/3662427560375_1.jpg"));
        this.products.add(new Product("IOKW9BQ9F3","Funda de piel","79.99","https://media2.gsm55.com/media/catalog/product/images/f4/folio-prem-br-17r/neutre/folio-prem-br-17r-1.jpg"));


        // Inserto productos en la tienda
        this.products.add(new Product("G4K8V9N2B1","Laptop UltraSlim","1299.99","https://www.avisualpro.es/wp-content/uploads/2020/06/ordenador-portatil-asus-zenbook-14-8gb-512gb.jpg"));
        this.products.add(new Product("X7P3L9Z8Q5","Auriculares con Cancelación de Ruido","149.50","https://vieta.es/cdn/shop/articles/8431543121037_01.jpg?v=1727795623&width=2048"));
        this.products.add(new Product("M2R6W1C4O8","Ratón Ergonómico Inalámbrico","59.95","https://img.pccomponentes.com/articles/28/287353/logitech-g203-lightsync-2nd-gen-raton-gaming-8000dpi-rgb-negro.jpg"));
        this.products.add(new Product("A9T5F0Y3E2","Teclado Mecánico RGB","119.99","https://m.media-amazon.com/images/I/61meQuPPc-L._AC_UF894,1000_QL80_.jpg"));
        this.products.add(new Product("H6J1S7D0K4","Monitor Curvo 27\"","349.00","https://img.global.news.samsung.com/mx/wp-content/uploads/2022/02/Odyssey-Neo-G9_2.jpg"));
        this.products.add(new Product("E9V8N3B5C1","Smartwatch Z5","210.75","https://static.carrefour.es/hd_510x_/crs/cdn_static/catalog/hd/511455_00_1.jpg"));
        this.products.add(new Product("L4P7O2I9U6","Cámara de Acción 4K","199.99","https://images.cdn.us-central1.gcp.commercetools.com/f7c8f2bb-aff1-4581-a826-1ad2527be222/FrontLeft-1590_D3500-O9tTpSQu-medium.png"));
        this.products.add(new Product("Z8X3C5V6B7","Mochila Antirrobo para Portátil","89.90","https://assets.adidas.com/images/w_600,f_auto,q_auto/83e8a50f81c044e69c9d3274af19fb2d_9366/Mochila_Classic_3_Bar_Logo_Negro_JI6953_01_00_standard.jpg"));
        this.products.add(new Product("Q1W2E3R4T5","Power Bank 20000mAh","45.50","https://iniushop.com/cdn/shop/files/b41_c492cf79-f2ce-4b57-bc60-855250a2c071.png?v=1747876759"));
        this.products.add(new Product("Y7U8I9O0P1","Altavoz Inteligente con Asistente","99.99","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdBU4LnLC-rS_-VqRnQXySFVmIO6XiCS5XeQ&s"));
    }

    public String getCurrency()
    {
        return currency;
    }

    public List<Product> getProducts()
    {
        return products;
    }
}
