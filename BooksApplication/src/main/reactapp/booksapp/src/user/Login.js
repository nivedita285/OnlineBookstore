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

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            id: '',
            contact: '',
            email: '',
            password: '',
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

        const { id, contact, email, password } = this.state;

        const userData = {
            id,
            contact,
            email,
            password,
        };

        this.addUser(userData);
    };

    addUser = (userData) => {
        console.log(userData);
        fetch("http://localhost:8085/api/v1/user", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(response => response.json())
            .then((newUser) => {
                if (newUser) {
                    this.setState({ "show": true });
                    setTimeout(() => this.setState({ "show": false }), 3000);
                    this.setState(prevState => ({
                        users: [...prevState.users, newUser],
                        id:'',
                        contact: '',
                        email: '',
                        password: '',
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
                            User added successfully
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
                                <Form.Group controlId="password">
                                    <Form.Label>user pwd</Form.Label>
                                    <Form.Control type="text" placeholder="Enter userpwd" value={this.state.password} onChange={this.handleInputChange} />
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

export default Login;
