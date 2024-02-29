package com.example.BooksApplication.repository;

import org.springframework.data.repository.CrudRepository;
import com.example.BooksApplication.domain.Books;

public interface BookRepository extends CrudRepository<Books, Long>{

}