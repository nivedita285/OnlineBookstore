import React, { Component } from 'react'
import { Card, Table, Image, ButtonGroup} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import axios from 'axios';
import MyToast from './MyToast'
import AppAppBar from "./AppAppBar";
import AddBook from "./AddBook";
import UpdateBook from "./UpdateBook";
import CheckIcon from "@mui/icons-material/Check";
import Alert from "@mui/material/Alert";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

class BookList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            books: []
        }
    }


    componentDidMount() {
        this.findAllBooks();
    }

    findAllBooks(){
        fetch("http://localhost:8085/api/v1/books")
            .then(response => response.json())
            .then((data) => {
                this.setState({ books: data })
            });
    }

    // deleteBook = (bookId) => {
    //     fetch("http://localhost:8085/api/v1/books/"+bookId, {
    //         method: 'DELETE'
    //     })
    //         .then(response => response.json())
    //         .then((book) => {
    //             if(book) {
    //                 this.setState({"show":true});
    //                 setTimeout(() => this.setState({"show":false}), 3000);
    //                 this.setState({
    //                     books: this.state.books.filter(book => book.id !== bookId)
    //                 });
    //             } else {
    //                 this.setState({"show":false});
    //             }
    //         });
    // };

    //deals with json parse error
    deleteBook = (bookId) => {
        fetch("http://localhost:8085/api/v1/books/"+bookId, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    this.setState({ "show": true });
                    setTimeout(() => this.setState({ "show": false }), 3000);
                    this.setState({
                        books: this.state.books.filter(book => book.id !== bookId)
                    });
                } else {
                    console.error('Failed to delete book. Status:', response.status);
                    // Optionally, you can show an error message to the user
                }
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle network errors or other unexpected errors
            });
    };

    // updateBook = event => {
    //     event.preventDefault();
    //     const book = {
    //         id: this.state.id,
    //         title: this.state.title,
    //         author: this.state.author,
    //         coverPhotoURL: this.state.coverPhotoURL,
    //         isbnNumber: this.state.isbnNumber,
    //         price: this.state.price,
    //         language: this.state.language
    //     };
    //     const headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     fetch("http://localhost:8085/api/v1/books", {
    //         method: 'PUT',
    //         body: JSON.stringify(book),
    //         headers
    //     })
    //         .then(response => response.json())
    //         .then((book) => {
    //             if(book) {
    //                 this.setState({"show":true, "method":"put"});
    //                 setTimeout(() => this.setState({"show":false}), 3000);
    //                 setTimeout(() => this.bookList(), 3000);
    //             } else {
    //                 this.setState({"show":false});
    //             }
    //         });
    //     this.setState(this.initialState);
    // };

    render() {
        const gridContainerStyle = {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '30px',
        };

        const gridItemStyle = {
            padding: '20px',
            backgroundColor: '#f8f9fa',
            border: '1px solid #dee2e6',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        };

        const bookInfoStyle = {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '10px',
        };

        const bookTitleStyle = {
            marginLeft: '10px',
            fontSize: '1.5rem',
            fontWeight: 'bold',
        };

        const bookCoverStyle = {
            width: '350px',
            height: 'auto',
            marginRight: '10px',
        };

        const bookDetailStyle = {
            fontSize: '1.2rem',
        };

        return (
            <div>
                <AppAppBar/>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <AddBook/>
                    <UpdateBook/>
                </div>
                <div style={{marginTop:'50px'}}>
                    <div style={{ display: this.state.show ? "block" : "none" }}>
                        {/*<MyToast show={this.state.show} message={"Book deleted successfully"} type={"danger"} />*/}
                        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success" color="warning">
                            Book deleted successfully
                        </Alert>
                    </div>
                    {/*<Card >*/}
                    {/*    /!*<Card.Body><FontAwesomeIcon icon={faList} /> Book List</Card.Body>*!/*/}
                    {/*    <Card.Body>*/}
                            <div style={gridContainerStyle}>
                                {this.state.books.length === 0 ?
                                    <div style={{ textAlign: 'center', gridColumn: '1 / -1' }}>Books Available</div> :
                                    this.state.books.map((book) => (
                                        <div style={gridItemStyle} key={book.id}>
                                            <div style={bookInfoStyle}>
                                                <img src={book.coverPhotoURL} alt="Book Cover" style={bookCoverStyle} />
                                                <span style={bookTitleStyle}>{book.title}</span>
                                            </div>
                                            <div style={bookDetailStyle}>
                                                <div><strong>Author:</strong> {book.author}</div>
                                                <div><strong>ISBN Number:</strong> {book.isbnNumber}</div>
                                                <div><strong>Language:</strong> {book.language}</div>
                                                <div><strong>Price:</strong> {book.price}</div>
                                            </div>
                                            <div>
                                                <ButtonGroup>


                                                    <Button size="lg" variant="outline-danger" onClick={this.deleteBook.bind(this, book.id)}>
                                                        {/*<FontAwesomeIcon icon={faTrash} />*/}
                                                        <Button variant="contained" size="large" startIcon={<DeleteIcon />} sx={{backgroundColor:'black', margin:'20px'}}>
                                                            Delete
                                                        </Button>
                                                    </Button>

                                                </ButtonGroup>
                                            </div>
                                    </div>
                                ))
                            }
                        </div>
                {/*    </Card.Body>*/}
                {/*</Card>*/}
            </div>
            </div>
        );


    }
}

export default BookList;