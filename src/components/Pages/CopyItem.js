import React from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';


class CopyItem extends React.Component {

    delete = () => {
        this.props.deleteCopy(this.props.data.Id);
    }

    render() {

        return (

            <Card style={{ flex: 1 }}>
                <Card.Body>
                    <Card.Title>{this.props.data.Number}</Card.Title>
                    <Card.Text>
                        {this.props.data.Condition}
                    </Card.Text>
                </Card.Body>

                <Card.Footer>
                    <Button variant="outline-danger" onClick={this.delete}>X</Button>
                </Card.Footer>

            </Card>


        );

    }
}

export default CopyItem;
