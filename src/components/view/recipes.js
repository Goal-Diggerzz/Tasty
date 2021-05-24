import React, { Component } from "react";
import { Card, CardDeck, Button } from "react-bootstrap";
import CardColumns from 'react-bootstrap/CardColumns';

// import CardDeck from "react-bootstrap/CardDeck";
import axios from 'axios'
let recipesData = [];

export class Recipes extends Component {

  render() {
    recipesData = this.props.foodData;
    console.log(this.props.foodData);
    return (
      <CardColumns style={{ marginTop: '100px', width: '89%', marginLeft: '10%' }}>

        { recipesData.map(data => {
          return (
            <div>

              <Card style={{ width: "20rem", height: '25rem' }}>
                <Card.Body>
                  <Card.Title>{data.label}</Card.Title>
                  <Card.Img src={data.img} />
                  {/* {data.img} */}
                  <Card.Text>
                    <p>Ingredients</p>{data.ingridients}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <p>Calories</p>{data.calories}
                </Card.Footer>
                <Button variant="primary" onClick={() => this.props.addFav(data)}>❤️</Button>
              </Card>
            </div>
          )

        })}
      </CardColumns>
    );
  }
}

export default Recipes;

      // <>


      //     <Form >
      //       <Form.Group onSubmit={this.getRecipe} controlId="formBasicText">
      //         <Form.Label>Search For Recipe</Form.Label>
      //       </Form.Group>
      //       <Form.Group controlId="formBasicEmail">
      //         <Form.Label>label</Form.Label>
      //         <Form.Control onChange={this.updateQuery}  type="text" placeholder="Enter Recipe" />
      //       </Form.Group>
      //     </Form>
      //     <Button onClick={this.getRecipe}  variant="primary" >Add</Button>

      // </>
