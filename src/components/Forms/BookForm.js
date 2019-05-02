import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InlineError from '../Helpers/InlineError';
import { Form, Button } from 'react-bootstrap';


class BookForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data: props.data ||  {
                Title: '',
                PublicationDate: '',
                ISBN: '',
                Pages: '',
                Description: '',
                Author: '',
                BookId: ''
            },
            loading: false,
            errors: {}
        }
     
    }
    
    
    onChange = (e) => {
        this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        let dataForm = { data: this.state.data };
        if (this.props.bookId) {
            dataForm.data.BookId = this.props.bookId;
            console.log(dataForm);
        }
        if (Object.keys(errors).length === 0) {
            this.props.submit(dataForm);
        }
    }

    validate = (data) => {
        const errors = {};
        if (!data.Title) errors.Title = "nao pode ser nulo";
        if (!data.Author) errors.Author = "Autor nao pode ser nulo";
        this.setState({ errors: errors });
        return errors;
    }

    renderError = (name) => {
        if (this.state.errors[name]) {
            return <div>{this.state.errors[name]}</div>;
        }

        return null;
    }

    render() {
        return (
            <div>

                
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="Title">
                        <Form.Label>Titulo</Form.Label>

                        <Form.Control name='Title' type="input" onChange={this.onChange} />
                        <span className="text-danger">{this.renderError("Title")}</span>
                    </Form.Group>
                    <Form.Group controlId="ISBN">
                        <Form.Label>ISBN</Form.Label>
                        <Form.Control name='ISBN' type="input" onChange={this.onChange} />

                    </Form.Group>

                    <Form.Group controlId="Pages">
                        <Form.Label>N Páginas</Form.Label>
                        <Form.Control name='Pages' type="input" onChange={this.onChange} />

                    </Form.Group>

                    <Form.Group controlId="Author">
                        <Form.Label>Autor</Form.Label>
                        <Form.Control name='Author' type="input" onChange={this.onChange} />
                        <span className="text-danger">{this.renderError("Author")}</span>
                    </Form.Group>

                    <Form.Group controlId="Description">
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control name='Description' type="input" onChange={this.onChange}  />

                    </Form.Group>
                    <Form.Group controlId="PublicationDate">
                        <Form.Label>Data de Publicação</Form.Label>
                        <Form.Control name='PublicationDate' type="date" onChange={this.onChange} />

                    </Form.Group>
                    <Button variant="primary" onClick={this.onSubmit}>Submit</Button>
                </Form>
            </div>

        );
    }
}
BookForm.propTypes = {
    submit: PropTypes.func.isRequired
};
export default BookForm;