import React, { Component } from 'react'
import { Card, Table, Image, ButtonGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import axios from 'axios';
import MyToast from './MyToast'
import AppAppBar from "./AppAppBar";
import Collapse from '@mui/material/Collapse';
import AddBook from "./AddBook";

class CollapsableTable extends Component {
    constructor(props) {
        super(props)

        this.state = {
            books: [],
            cart: []
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

    deleteBook = (bookId) => {
        fetch("http://localhost:8085/api/v1/books/"+bookId, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then((book) => {
                if(book) {
                    this.setState({"show":true});
                    setTimeout(() => this.setState({"show":false}), 3000);
                    this.setState({
                        books: this.state.books.filter(book => book.id !== bookId)
                    });
                } else {
                    this.setState({"show":false});
                }
            });
    };


    addToCart = (book) => {
        const cart = [...this.state.cart];
        cart.push(book);
        this.setState({ cart });
    };

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
            <div style={{marginTop:'80px'}}>
                {/*<div style={{ display: this.state.show ? "block" : "none" }}>*/}
                {/*    <MyToast show={this.state.show} message={"Book deleted successfully"} type={"danger"} />*/}
                {/*</div>*/}
                {/*<Card className={"border border-dark bg-dark text-white"}>*/}
                    {/*<Card.Body><FontAwesomeIcon icon={faList} /> Book List</Card.Body>*/}
                    {/*<Card.Body>*/}
                        <div style={gridContainerStyle}>
                            {this.state.books.length === 0 ?
                                // <div>Books Available None</div> :
                                <div style={{ textAlign: 'center', gridColumn: '1 / -1' }}>Books Available None</div> :
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
                                        <div style={{ marginTop: '10px' }}>
                                            {/*<ButtonGroup>*/}
                                            {/*    <Link to={"edit/" + book.id} className="btn btn-sm btn-outline-primary"><FontAwesomeIcon icon={faEdit} /></Link>{' '}*/}
                                            {/*    <Button size="sm" variant="outline-danger" onClick={this.deleteBook.bind(this, book.id)}><FontAwesomeIcon icon={faTrash} /></Button>*/}
                                            {/*</ButtonGroup>*/}
                                            <Button onClick={() => this.addToCart(book)}
                                                style={{border: 'none',
                                                outline: 0,
                                                padding: '12px',
                                                color: 'white',
                                                backgroundColor: '#000',
                                                textAlign: 'center',
                                                cursor: 'pointer',
                                                width: '100%',
                                                fontSize: '18px'}}>Add To Cart</Button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    {/*</Card.Body>*/}
                {/*</Card>*/}
            </div>
            </div>
        )
    }


}

export default CollapsableTable;