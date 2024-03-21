import React, { Component, useState } from 'react'
import { Card, Table, Image, ButtonGroup, Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import Link from '@mui/material/Link';
import axios from 'axios';
// import MyToast from './components/MyToast'
// import AppAppBar from "./components/AppAppBar";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import {ThemeProvider} from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from '@mui/material/Button';


class Signin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            id: '',
            contact: '',
            email: '',
            userpassword: '',
            show: false,
            statusCode: ''
        };
    }

    setStatusCode(code) {
        this.setState({ statusCode: code });
    }

    toggleSnippet = () => {
        this.setState(prevState => ({ show: !prevState.show }));
    };

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

        const { id, contact, email, userpassword, statusCode } = this.state;

        const userData = {
            id,
            contact,
            email,
            userpassword,
            statusCode,
        };

        this.addUser(userData);
    };

    addUser = (userData) => {
        const { email, userpassword, statusCode } = this.state;
        fetch(`http://localhost:8085/api/v1/user/${email}/${userpassword}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify(userData)
        })
            .then(response=>{
                console.log(response.status);
                this.setState({statusCode: response.status});
            })



    };

    render() {


        return (
            <div>

        <Grid container component="main" sx={{height: '100vh'}}>
            <CssBaseline/>
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    // backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                            backgroundImage: 'url(https://images.unsplash.com/photo-1633477189729-9290b3261d0a?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <Box component="form" noValidate onSubmit={this.handleSubmit} sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Enter user id"
                                    name="email"
                                    autoComplete="email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="userpassword"
                                    value={this.state.userpassword}
                                    onChange={this.handleInputChange}
                                    autoComplete="current-password"
                                />

                                <div>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    // href="/home"
                                    onClick={this.toggleSnippet}
                                >
                                    Sign In
                                </Button>
                                    {this.state.show && (
                                        <div>
                                            <pre>Status Code: {this.state.statusCode}</pre>
                                        </div>
                                    )}
                                </div>
                                <Grid container>
                                <Grid item xs>
                                        <Link href="/home" variant="body2">
                                            Home
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="/signup" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>

                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        );
    }

}

export default Signin;
