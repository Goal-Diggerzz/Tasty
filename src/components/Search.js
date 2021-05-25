import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Search extends React.Component {
  render() {
    return (
      <Form style={{ textAlign: 'center' }} >
        <Form.Group controlId="formBasicText">

          <Form.Label className='find' style={{ fontFamily: `'Merienda One', cursive`, fontWeight: '500', color: 'white' }}>Find Recipe</Form.Label>

          <h2 class='stat'>It is even better than
          an expensive cookery book <br />
          Learn how to make your favorite restaurant’s dishes
          </h2>
          <br />
          <div className='upUp'>
            <div className='upSearch'>
              <Form.Control className='searchR' style={{ width: '300px' }} onChange={this.props.updateQuery} type="Text" placeholder="Enter Recipe" />
            </div>
          </div>
        </Form.Group>
        <Button className='s' onClick={() => this.props.getRecipesData()} variant="primary">
          Search 🔎
                </Button>
      </Form  >
    );
  }
}

export default Search;