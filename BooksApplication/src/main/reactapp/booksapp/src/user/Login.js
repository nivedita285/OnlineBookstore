import React, { Component } from 'react'
import { Card, Table, Image, ButtonGroup,Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
// import MyToast from './components/MyToast'
// import AppAppBar from "./components/AppAppBar";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import {ThemeProvider} from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            id: '',
            contact: '',
            email: '',
            password: '',
            show: false,
            newUserId: null
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
                    this.setState({ "show": true, newUserId: newUser.id });
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

        const { newUserId } = this.state;
        return (
            <div>

                    <div style={{display: this.state.show ? "block" : "none"}}>
                    <Alert icon={<CheckIcon fontSize="inherit"/>} severity="success">
                    User added successfully
                    </Alert>
                    </div>

                        <Container component="main" maxWidth="xs">
                            <CssBaseline/>
                            <Box
                                sx={{
                                    marginTop: 8,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                                    <LockOutlinedIcon/>
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    Sign up
                                </Typography>
                                <Box component="form" noValidate onSubmit={this.handleSubmit} sx={{mt: 3}}>
                                    <Grid container spacing={2}>

                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="email"
                                                label="Email Address"
                                                name="email"
                                                autoComplete="email"
                                                value={this.state.email}
                                                onChange={this.handleInputChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                name="password"
                                                label="Password"
                                                type="password"
                                                id="password"
                                                autoComplete="new-password"
                                                value={this.state.password}
                                                onChange={this.handleInputChange}
                                            />
                                        </Grid>

                                    </Grid>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{mt: 3, mb: 2}}

                                    >
                                        Sign Up
                                    </Button>
                                    <div>
                                        {/* Other JSX */}
                                        {newUserId && (
                                            <div>
                                                <p>New User
                                                    ID: {newUserId}</p> {/* Display the ID of the newly added user */}
                                            </div>
                                        )}
                                    </div>
                                    <Grid container justifyContent="flex-end">
                                        <Grid item>
                                            <Link href="/signin" variant="body2">
                                                Already have an account? Sign in
                                            </Link>
                                        </Grid>
                                    </Grid>
                                    <Grid container justifyContent="flex-end">
                                        <Grid item>
                                            <Link href="/home" variant="body2">
                                                Home
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>

                        </Container>
            </div>
        );

        // return (
        // <div>
        // {/*<AppAppBar />*/}
        // <div style={{marginTop: '80px'}}>
                    // <div style={{display: this.state.show ? "block" : "none"}}>
                    // {/*<MyToast show={this.state.show} message={"Book added successfully"} type={"success"} />*/}
                    // <Alert icon={<CheckIcon fontSize="inherit"/>} severity="success">
                    // User added successfully
                    // </Alert>
                    // </div>
                    // <Card className={"border border-dark bg-dark text-white"}>
                    // <Card.Body>
                    // <h2>Add New User</h2>
                    // <Form onSubmit={this.handleSubmit}>
                    // {/*<Form.Group controlId="id">*/}
                    // {/*    <Form.Label>ID</Form.Label>*/}
                    // {/*    <Form.Control type="text" placeholder="Enter id" value={this.state.bookid} onChange={this.handleInputChange} />*/}
                    // {/*</Form.Group>*/}
                    // <Form.Group controlId="contact">
                    // <Form.Label>contact</Form.Label>
                    // <Form.Control type="number" placeholder="Enter contact" value={this.state.contact}
                                    // onChange={this.handleInputChange}/>
                    // </Form.Group>
                    // <Form.Group controlId="email">
                    // <Form.Label>email</Form.Label>
                    // <Form.Control type="text" placeholder="Enter email" value={this.state.email}
                                     //onChange={this.handleInputChange}/>
                    // </Form.Group>
                    // <Form.Group controlId="password">
                    // <Form.Label>user pwd</Form.Label>
                    // <Form.Control type="text" placeholder="Enter userpwd" value={this.state.password}
                                     //onChange={this.handleInputChange}/>
                    // </Form.Group>
                    // <Button variant="primary" type="submit">
                    // Submit
                    // </Button>
                    // </Form>
                    // </Card.Body>
                    // </Card>
                    // </div>
                    // </div>
                    // );
                    }

                    }

                    export default Login;
