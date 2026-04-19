package com.ecommerce.Repository;

//import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.Database.Cart;
//import com.ecommerce.Database.Products;

@Repository
public interface C_Repository extends JpaRepository<Cart, Long> {

    // Spring generates: SELECT * FROM products WHERE price BETWEEN min AND max
    // List<Products> findByPriceBetween(double min, double max);

    // SELECT * FROM products WHERE name = ?
    // List<Products> findByName(String name);

    // SELECT * FROM products WHERE name LIKE %keyword%
    // List<Products> findByNameContaining(String keyword);

    // SELECT * FROM products WHERE price <= ?
    // List<Products> findByPriceLessThanEqual(double maxPrice);

    // SELECT * FROM products WHERE quantity > 0
    // List<Products> findByQuantityGreaterThan(int quantity);

    // SELECT * FROM products WHERE name = ? AND price <= ?
    // List<Products> findByNameAndPriceLessThanEqual(String name, double price);

}
