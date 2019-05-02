import React, { Component } from 'react';
import axios from 'axios';
import CopyItem from './CopyItem';
import { Button } from 'react-bootstrap'
import CopyForm from '../Forms/CopyForm';
import { getCopiesReq, addCopyReq, deleteCopyReq } from '../Helpers/Requests'

class BookCopies extends Component {
    state = {
        copies: [],
        isLoading: false,
        addExemplar: false
    }

    componentDidMount() {
        this.getCopies();
    }

    getCopies = () => {
        getCopiesReq(this.props.match.params.bookId)
            .then((response) => {
                this.setState({ copies: response.data }, () => {
                    console.log(this.state.data);
                });
            }).catch((error) => {
                alert(error)
            });
    }
    addCopy = data => {
        console.log(data);
        data.data.BookId = this.props.match.params.bookId;
        addCopyReq(data.data)
            .then((response) => {
                alert("ok");
                this.getCopies();
                this.setState({ addExemplar: false })
            }).catch((error) => {
                if (error.response) {
                    console.log(error.response.data); // => the response payload 
                    alert(error.response.data);
                } else {
                    alert(error);
                }

            });
    }
    deleteCopy = (copyId) => {
        deleteCopyReq(copyId)
            .then((response) => {
                this.getCopies();
                alert("sucesso")
            }).catch((error) => {
                alert(error)
            })
    }

    renderForm = () => {
        this.setState({ addExemplar: true });
    }

    render() {
        if (this.state.addExemplar) {
            return <CopyForm submit={this.addCopy}></CopyForm>
        }
        return (
            <div>
                <span>Exemplares <Button variant="primary" onClick={this.renderForm}>+</Button></span>
                <hr />
                <div className="ui cards" style={{ display: 'flex', flexDirection: 'row' }}>
                    {this.state.copies.map((item, index) => {
                        return <CopyItem key={"Copy: " + item.Id} data={item} deleteCopy={this.deleteCopy}></CopyItem>

                    })}
                </div>

            </div>
        );
    }
}

export default BookCopies;