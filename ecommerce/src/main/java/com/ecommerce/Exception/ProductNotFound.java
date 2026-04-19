package com.ecommerce.Exception;

public class ProductNotFound extends RuntimeException {
    public ProductNotFound(Long id) {
        super("Product not found with this id: " + id);
    }

}
