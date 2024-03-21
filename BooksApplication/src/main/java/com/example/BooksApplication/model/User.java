package com.example.BooksApplication.model;

import com.example.BooksApplication.domain.Books;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="users")
public class User {

    @Column
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    //@Id
    @Column
    private String email;

    //    @Id
    @Column(name = "contact")
    private int contactme;

    //    @Id
    @Column(name = "password")
    private String password;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getContactme() {
        return contactme;
    }

    public void setContactme(int contactme) {
        this.contactme = contactme;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

//    @OneToMany(mappedBy = "user",
//            cascade = CascadeType.ALL,
//            fetch = FetchType.EAGER
//    )
//    private List<Books> books;
//
//    public List<Books> getBooks() {
//        return books;
//    }
//
//    public void setBooks(List<Books> books) {
//        this.books = books;
//    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", contactme='" + contactme + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
