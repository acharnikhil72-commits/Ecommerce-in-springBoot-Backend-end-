package com.ecommerce.Database;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Products {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty("id")
    private Long P_id;

    @JsonProperty("name")
    private String P_name;

    @JsonProperty("quantity")
    private Integer P_quantity;

    @JsonProperty("price")
    private Long P_price;

    @JsonProperty("description")
    private String description;

}
