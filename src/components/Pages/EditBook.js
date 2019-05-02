import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import BookForm from '../Forms/BookForm';
import { updateBookReq } from '../Helpers/Requests'
import axios from 'axios';

class EditBook extends Component {
    routeChange(route) {
        let path = route;
        this.props.history.push(path);
    }

    updateBook = (data) => {
        updateBookReq(data.data)
            .then((response) => {
                alert("atualizado com sucesso")
                this.routeChange("/");
            }).catch((error) => {
                if (error.response) {
                    console.log(error.response.data); 
                    alert(error.response.data);
                } else {
                    alert(error);
                }
            });
    }

    render() {

        return (
            <div>
                <h3>Edite o Livro</h3>
                <BookForm submit={this.updateBook} data={this.props.data} bookId={this.props.match.params.bookId}></BookForm>
            </div>

        );
    }
}

export default EditBook;