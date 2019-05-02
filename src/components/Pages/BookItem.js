import React, { Component } from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';
import BookCopies from './BookCopies';
import EditBook from './EditBook';
import { router, Link, withRouter } from 'react-router-dom';
import { Redirect } from 'react-router';

class BookItem extends Component {

    delete = () => {
        this.props.deleteBook(this.props.data.BookId);
    }


    render() {

        return (

            <Card style={{ flex: 1 }}>
                <Card.Header > <Link to={"/BookCopies/" + this.props.data.BookId}>{this.props.data.Title}</Link></Card.Header>

                {this.props.data.Description &&
                    <Card.Body>
                        <Card.Text>
                         Descricao:   {this.props.data.Description}
                        </Card.Text>
                    </Card.Body>
                }

                <ListGroup variant="flush">
                    <ListGroup.Item>Autor: {this.props.data.Author}</ListGroup.Item>
                    {this.props.data.ISBN &&
                        <ListGroup.Item>ISBN: {this.props.data.ISBN}</ListGroup.Item>
                    }
                    {this.props.data.Pages > 0 &&
                        <ListGroup.Item>N pags: {this.props.data.Pages}</ListGroup.Item>
                    }

                    {this.props.data.PublicationDate &&
                        <ListGroup.Item>Data Publicacao: {this.props.data.PublicationDate}</ListGroup.Item>
                    }

                </ListGroup>
                <Card.Footer>
                    <Button variant="outline-primary"><Link to={"/EditBook/" + this.props.data.BookId}>Edit</Link></Button>
                    <Button variant="outline-danger" onClick={this.delete}>X</Button>
                </Card.Footer>

            </Card>


        );

    }
}

export default BookItem;