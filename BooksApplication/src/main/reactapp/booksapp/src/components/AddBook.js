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

class AddBook extends Component {
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
        fetch("http://localhost:8085/api/v1/books", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookData)
        })
            .then(response => response.json())
            .then((newBook) => {
                if (newBook) {
                    this.setState({ "show": true });
                    setTimeout(() => this.setState({ "show": false }), 3000);
                    this.setState(prevState => ({
                        books: [...prevState.books, newBook],
                        bookid:'',
                        title: '',
                        author: '',
                        isbnNumber: '',
                        language: '',
                        price: '',
                        coverPhotoURL: ''
                    }));
                } else {
                    this.setState({ "show": false });
                }
            });
    };

    render() {
        return (
            <div>
                {/*<AppAppBar />*/}
                <div style={{ marginTop: '80px' }}>
                    <div style={{ display: this.state.show ? "block" : "none" }}>
                        {/*<MyToast show={this.state.show} message={"Book added successfully"} type={"success"} />*/}
                        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                            Book added successfully
                        </Alert>
                    </div>
                    <Card className={"border border-dark bg-dark text-white"}>
                        <Card.Body>
                            <h2>Add New Book</h2>
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

export default AddBook;
