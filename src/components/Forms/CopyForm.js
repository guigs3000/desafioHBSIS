import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InlineError from '../Helpers/InlineError';
import { Form, Button } from 'react-bootstrap';


class CopyForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            
            data: {
                BookId: '',
                Number: '',
                Condition: 'New',
                
            },
            loading: false,
            errors: {}
        }
        
    }
    
    
    onChange = (e) => {
        console.log(e.target.value);
        this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        let dataForm = { data: this.state.data };
        if (Object.keys(errors).length === 0) {
            this.props.submit(dataForm);
        }
    }

    validate = (data) => {
        const errors = {};
        if (!data.Number) errors.Number = "nao pode ser nulo";
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

                <h3>Add New Book</h3>
                <Form onSubmit={this.onSubmit}>
                    
                    <Form.Group controlId="Number">
                        <Form.Label>Numero</Form.Label>

                        <Form.Control name='Number' type="input" onChange={this.onChange} />
                        <span className="text-danger">{this.renderError("Number")}</span>
                    </Form.Group>
                    <Form.Group controlId="Condition">
                        <Form.Label>Condicao</Form.Label>
                        <Form.Control name='Condition' as="select" onChange={this.onChange} >

                            <option value="New">Novo</option>
                            <option value="VeryGood">Excelente</option>
                            <option value="Fine">Boa</option>
                            <option value="Fair">Razoavel</option>
                            <option value="Poor">Ruim</option>
                        </Form.Control>
                    </Form.Group>

                    
                    <Button variant="primary" onClick={this.onSubmit}>Submit</Button>
                </Form>
            </div>

        );
    }
}
CopyForm.propTypes = {
    submit: PropTypes.func.isRequired
};
export default CopyForm;