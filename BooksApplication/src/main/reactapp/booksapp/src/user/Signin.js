import React, { Component } from 'react'
import { Card, Table, Image, ButtonGroup, Button, Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import axios from 'axios';
// import MyToast from './components/MyToast'
// import AppAppBar from "./components/AppAppBar";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

class Signin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            id: '',
            contact: '',
            email: '',
            userpassword: '',
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

        const { id, contact, email, userpassword } = this.state;

        const userData = {
            id,
            contact,
            email,
            userpassword,
        };

        this.addUser(userData);
    };

    addUser = (userData) => {
        const { email, userpassword } = this.state;
        fetch(`http://localhost:8085/api/v1/user/${email}/${userpassword}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify(userData)
        })
            .then(response=>{
                console.log(response);
            })


    };

    render() {
        return (
            <div>
                {/*<AppAppBar />*/}
                <div style={{ marginTop: '80px' }}>
                    <div style={{ display: this.state.show ? "block" : "none" }}>
                        {/*<MyToast show={this.state.show} message={"Book added successfully"} type={"success"} />*/}
                        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                            User logged in successfully
                        </Alert>
                    </div>
                    <Card className={"border border-dark bg-dark text-white"}>
                        <Card.Body>
                            <h2>Add New User</h2>
                            <Form onSubmit={this.handleSubmit}>
                                {/*<Form.Group controlId="id">*/}
                                {/*    <Form.Label>ID</Form.Label>*/}
                                {/*    <Form.Control type="text" placeholder="Enter id" value={this.state.bookid} onChange={this.handleInputChange} />*/}
                                {/*</Form.Group>*/}
                                <Form.Group controlId="contact">
                                    <Form.Label>contact</Form.Label>
                                    <Form.Control type="number" placeholder="Enter contact" value={this.state.contact} onChange={this.handleInputChange} />
                                </Form.Group>
                                <Form.Group controlId="email">
                                    <Form.Label>email</Form.Label>
                                    <Form.Control type="text" placeholder="Enter email" value={this.state.email} onChange={this.handleInputChange} />
                                </Form.Group>
                                <Form.Group controlId="userpassword">
                                    <Form.Label>user pwd</Form.Label>
                                    <Form.Control type="text" placeholder="Enter userpwd" value={this.state.userpassword} onChange={this.handleInputChange} />
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

export default Signin;
