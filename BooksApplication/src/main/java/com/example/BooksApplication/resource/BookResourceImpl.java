package com.example.BooksApplication.resource;


import com.example.BooksApplication.domain.Books;
import com.example.BooksApplication.repository.BookRepository;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/books")
@CrossOrigin(origins="http://localhost:3000")
public class BookResourceImpl implements Resource<Books> {

    @Autowired
    private BookRepository bookRepo;

    @Override
    public ResponseEntity<Optional<Books>> findById(Long id) {
        return new ResponseEntity<Optional<Books>>((Optional<Books>) bookRepo.findById(id), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Collection<Books>> findAll() {
        return new ResponseEntity<Collection<Books>>((Collection<Books>) bookRepo.findAll(), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Books> save(@RequestBody Books book){
        return new ResponseEntity<>(bookRepo.save(book), HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<Books> update(Books book) {
        return new ResponseEntity<>(bookRepo.save(book), HttpStatus.OK); // only difference is status code
    }

    @Override
    public ResponseEntity<Books> deleteById(Long id) {
        if(bookRepo.existsById(id)) {
            bookRepo.deleteById(id);
            return new ResponseEntity<Books>(HttpStatus.OK);
        }
        return new ResponseEntity<Books>(HttpStatus.NOT_FOUND);
    }

}