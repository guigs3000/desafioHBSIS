import React, { Component } from 'react';
import BookItem from './BookItem';
import { Button } from 'react-bootstrap';
import { getBooksReq, deleteBookReq } from '../Helpers/Requests'
import axios from 'axios';
class Home extends Component {
    state = {
        books: [],
        isLoading: false
    }

    componentDidMount() {
        this.getBooks();
    }

    handleChange = (data) => {
        this.setState({books: data.data})
    }
    getBooks = () => {
        getBooksReq()
            .then((response) => {
                this.handleChange(response);
            }).catch((error) => {
                alert(error)
            });
    }

    deleteBook = (BookId) => {
        deleteBookReq(BookId)        
            .then((response) => {
                this.getBooks();
                alert("sucesso")
            }).catch((error) => {
                alert(error)
            })
    }


    render() {
        return (
            <div>
                <div className="ui cards">
                    {this.state.books.map((item, index) => {
                        return <BookItem key={"book id" + item.BookId} data={item} deleteBook={this.deleteBook} history={this.props.history}></BookItem>
                    })}
                </div>


            </div>
        );
    }
}

export default Home;