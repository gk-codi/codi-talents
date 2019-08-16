// modules imports
import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import qs from 'qs';
import ReactGA from 'react-ga';
// files imports

class FormInstance extends Component {
    // returned contact form body to render it in ContactFormModal
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            username: '',
            message: '',
            student_name: this.props.student_name
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    };
    handleSubmit(e) {
        e.preventDefault();
        const myData = {
            name: this.state.name,
            email: this.state.email,
            username: this.state.username,
            message: this.state.message,
            student_name: this.state.student_name
        };
        ReactGA.event({
            category: 'Contact Form',
            action: 'Submit'
        });
        axios.post('https://api-talents.codi.tech/api/form', qs.stringify(myData))
            .then(response => {
                if (response.data.success) {
                    alert('Dear ' + this.state.name + ',Your message has been submitted');
                    this.setState({
                        name: '',
                        email: '',
                        username: '',
                        message: '',
                    })
                } else {
                    alert('Sorry there is something wrong happen, please try again later!');
                }
                console.log(response.data.success)
            })
            .catch(error => {
                alert('Sorry there is something wrong happen, please try again later!');
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="name">Company Name:</Label>
                    <Input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
                </FormGroup>
                <FormGroup>
                    <Label for="username">User Name:</Label>
                    <Input type="text" name="username" onChange={this.handleChange} value={this.state.username} />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email:</Label>
                    <Input type="email" name="email" onChange={this.handleChange} value={this.state.email} />
                </FormGroup>
                <FormGroup>
                    <Label for="message">Message:</Label>
                    <Input type="textarea" name="message" onChange={this.handleChange} value={this.state.message} />
                </FormGroup>
                <button>Submit</button>
            </form>
        );
    }

}

export default FormInstance;
