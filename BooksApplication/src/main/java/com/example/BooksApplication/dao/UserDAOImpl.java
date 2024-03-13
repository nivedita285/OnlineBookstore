package com.example.BooksApplication.dao;

import com.example.BooksApplication.model.User;
import jakarta.persistence.EntityManager;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserDAOImpl implements UserDAO{

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<User> get() {
        Session session=entityManager.unwrap(Session.class);
        Query<User> query= session.createQuery("From User",User.class);
        List<User> list=query.getResultList();
        return list;
    }

    @Override
    public User get(String email) {
        Session session=entityManager.unwrap(Session.class);
        return session.get(User.class,email);
    }

    @Override
    public void save(User user) {
        Session session=entityManager.unwrap(Session.class);
        session.saveOrUpdate(user);
    }

    @Override
    public void delete(int id) {
        Session session=entityManager.unwrap(Session.class);
        User user=session.get(User.class,id);
        session.delete(user);
    }
}
