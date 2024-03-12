package com.example.BooksApplication;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BooksApplication {

	public static void main(String[] args) {

		SpringApplication.run(BooksApplication.class, args);
	}

}

//http://localhost:8085/api/v1/books/100