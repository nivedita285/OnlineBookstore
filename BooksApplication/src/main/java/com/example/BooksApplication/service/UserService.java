package com.example.BooksApplication.service;

import com.example.BooksApplication.model.User;
import java.util.List;

public interface UserService {

    List<User> get();

    //    User get(int id);
    User get(String email);
    void save(User user);

    void delete(int id);
}
