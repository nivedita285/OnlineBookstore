package com.example.BooksApplication.dao;

import com.example.BooksApplication.model.User;
import java.util.List;
public interface UserDAO {

    List<User> get();

    //    User get(int id);
    User get(String email);
    void save(User user);

    void delete(int id);
}
