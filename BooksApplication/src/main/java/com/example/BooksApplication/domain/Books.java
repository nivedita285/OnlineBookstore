package com.example.BooksApplication.domain;


import com.example.BooksApplication.model.User;
import jakarta.persistence.*;

@Entity
public class Books {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    private String title;
    private String author;
    private String coverPhotoURL;
    private Long isbnNumber;
    private Double price;
    private String language;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getAuthor() {
        return author;
    }
    public void setAuthor(String author) {
        this.author = author;
    }
    public String getCoverPhotoURL() {
        return coverPhotoURL;
    }
    public void setCoverPhotoURL(String coverPhotoURL) {
        this.coverPhotoURL = coverPhotoURL;
    }
    public Long getIsbnNumber() {
        return isbnNumber;
    }
    public void setIsbnNumber(Long isbnNumber) {
        this.isbnNumber = isbnNumber;
    }
    public Double getPrice() {
        return price;
    }
    public void setPrice(Double price) {
        this.price = price;
    }
    public String getLanguage() {
        return language;
    }
    public void setLanguage(String language) {
        this.language = language;
    }

//    @ManyToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "USER_FK")
//    private User user;
//
//    public User getUser() {
//        return user;
//    }
//
//    public void setUser(User user) {
//        this.user = user;
//    }
}
