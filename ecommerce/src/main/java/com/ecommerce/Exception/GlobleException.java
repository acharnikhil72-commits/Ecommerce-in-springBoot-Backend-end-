package com.ecommerce.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobleException {
    @ExceptionHandler(ProductNotFound.class)
    public ResponseEntity<ErrorResponse> handleProductNotFound(ProductNotFound ex) {
        ErrorResponse errorResponse = new ErrorResponse(404, ex.getMessage());
        return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(OutofStock.class)
    public ResponseEntity<ErrorResponse> OutofStock(OutofStock ex) {
        ErrorResponse error = new ErrorResponse(404, ex.getMessage());
        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGenericException(Exception ex) {
        ErrorResponse error = new ErrorResponse(500, "OOPsss   something went wrong  ");
        return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }

}
