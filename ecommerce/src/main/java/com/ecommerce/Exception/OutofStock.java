package com.ecommerce.Exception;

public class OutofStock extends RuntimeException {
    public OutofStock(Long id) {
        super("Product is out of stock with id: " + id);
    }

}
