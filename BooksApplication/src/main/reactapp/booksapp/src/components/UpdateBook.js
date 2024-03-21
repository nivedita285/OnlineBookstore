import React, { Component } from 'react'
import { Card, Table, Image, ButtonGroup, Button, Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import axios from 'axios';
import MyToast from './MyToast'
import AppAppBar from "./AppAppBar";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

class UpdateBook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [],
            bookid: '',
            title: '',
            author: '',
            isbnNumber: '',
            language: '',
            price: '',
            coverPhotoURL: '',
            show: false
        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.id;

        this.setState({
            [name]: value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const { bookid, title, author, isbnNumber, language, price, coverPhotoURL } = this.state;

        const bookData = {
            bookid,
            title,
            author,
            isbnNumber,
            language,
            price: parseFloat(price),
            coverPhotoURL
        };

        this.addBook(bookData);
    };

    addBook = (bookData) => {
        const { books } = this.state;
        const { bookid, title, author, isbnNumber, language, price, coverPhotoURL } = bookData;
        const existingBookIndex = books.findIndex(book => book.bookid === bookid);


            // If book ID already exists, update fields of the existing book
            const updatedBooks = [...books];
            updatedBooks[existingBookIndex] = { ...updatedBooks[existingBookIndex], title, author, isbnNumber, language, price, coverPhotoURL };
            this.setState({ books: updatedBooks });

            // Assuming updating fields requires a PATCH request
            fetch("http://localhost:8085/api/v1/books/"+bookid, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, author, isbnNumber, language, price, coverPhotoURL })
            })
                .then(response => {
                    if (response.ok) {
                        console.log(response);
                        this.setState({ "show": true });
                        setTimeout(() => this.setState({ "show": false }), 3000);
                    } else {
                        // Handle error if PATCH request fails
                    }
                })
                .catch(error => {
                    // Handle error if fetch fails
                });

    };

    // updateBook = event => {
    //
    //     const book = {
    //         id: this.state.id,
    //         title: this.state.title,
    //         author: this.state.author,
    //         isbnNumber: this.state.isbnNumber,
    //         coverPhotoURL: this.state.coverPhotoURL,
    //         language: this.state.language,
    //         price: this.state.price
    //     };
    //
    //     axios.put("http://localhost:8085/api/v1/books", book)
    //         .then(response => {
    //             if (response.data != null) {
    //                 this.setState({ "show": true, "method": "put" });
    //                 this.setState(this.initialState);
    //                 // alert('Book Saved Successfully');
    //                 setTimeout(() => this.setState({ "show": false }), 3000);
    //                 setTimeout(() => this.bookList(), 500);
    //
    //             } else {
    //                 this.setState({ 'show': false });
    //             }
    //         })
    // }


    render() {
        return (
            <div>
                {/*<AppAppBar />*/}
                <div style={{ marginTop: '80px' }}>
                    <div style={{ display: this.state.show ? "block" : "none" }}>
                        {/*<MyToast show={this.state.show} message={"Book added successfully"} type={"success"} />*/}
                        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                            Book updated successfully
                        </Alert>
                    </div>
                    <Card className={"border border-dark bg-dark text-white"}>
                        <Card.Body>
                            <h2>Update Book</h2>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="bookid">
                                    <Form.Label>ID</Form.Label>
                                    <Form.Control type="text" placeholder="Enter id" value={this.state.bookid} onChange={this.handleInputChange} />
                                </Form.Group>
                                <Form.Group controlId="title">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" placeholder="Enter title" value={this.state.title} onChange={this.handleInputChange} />
                                </Form.Group>
                                <Form.Group controlId="author">
                                    <Form.Label>Author</Form.Label>
                                    <Form.Control type="text" placeholder="Enter author" value={this.state.author} onChange={this.handleInputChange} />
                                </Form.Group>
                                <Form.Group controlId="isbnNumber">
                                    <Form.Label>ISBN Number</Form.Label>
                                    <Form.Control type="text" placeholder="Enter ISBN number" value={this.state.isbnNumber} onChange={this.handleInputChange} />
                                </Form.Group>
                                <Form.Group controlId="language">
                                    <Form.Label>Language</Form.Label>
                                    <Form.Control type="text" placeholder="Enter language" value={this.state.language} onChange={this.handleInputChange} />
                                </Form.Group>
                                <Form.Group controlId="price">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type="number" placeholder="Enter price" value={this.state.price} onChange={this.handleInputChange} />
                                </Form.Group>
                                <Form.Group controlId="coverPhotoURL">
                                    <Form.Label>cover Photo</Form.Label>
                                    <Form.Control type="text" placeholder="Enter url" value={this.state.coverPhotoURL} onChange={this.handleInputChange} />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        );
    }

}

export default UpdateBook;
