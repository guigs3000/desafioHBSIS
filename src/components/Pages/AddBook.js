import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import BookForm from '../Forms/BookForm';
import axios from 'axios';
import { Redirect } from 'react-router';
import { addBookReq } from '../Helpers/Requests'
class AddBook extends Component {

    routeChange(route) {
        let path = route;
        this.props.history.push(path);
    }

    addBook = data => {

        addBookReq(data.data)
            .then((response) => {
                alert("ok");
                this.routeChange("/");
            }).catch((error) => {
                if (error.response) {
                    console.log(error.response.data); // => the response payload 
                    alert(error.response.data);
                } else {
                    alert(error);
                }
                
            });
    }


    render() {
        return (
            <div>
                <h3>Adicione um livro</h3>
                <BookForm submit={this.addBook}></BookForm>
            </div>

        );
    }
}

export default AddBook;