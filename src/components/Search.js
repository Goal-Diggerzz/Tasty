import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Search extends React.Component {
    render() {
        return (
            <Form style={{ textAlign: 'center' }} >
                <Form.Group controlId="formBasicText">
                    <Form.Label>Find Recipe</Form.Label>
                    <br />
                    <Form.Control style={{ width: '300px' }} onChange={this.props.updateQuery} type="Text" placeholder="Enter Recipe" />
                </Form.Group>
                <Button onClick={this.props.getRecipesData} variant="primary">
                    Search
                </Button>
            </Form  >
        );
    }
}

export default Search;