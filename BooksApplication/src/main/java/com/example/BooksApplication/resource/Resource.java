package com.example.BooksApplication.resource;

import java.util.Collection;
import java.util.Optional;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

public interface Resource<T> {

    @GetMapping
    public ResponseEntity<Collection<T>> findAll();

    @GetMapping("{id}")
    public ResponseEntity<Optional<T>> findById(@PathVariable Long id);

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<T> save(@RequestBody T t);

    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<T> update(@RequestBody T t);

    @DeleteMapping("{id}")
    public ResponseEntity<T> deleteById(@PathVariable Long id);
}