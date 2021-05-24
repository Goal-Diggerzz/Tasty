import React, { Component } from "react";
import {  Card, CardDeck } from "react-bootstrap";
// import CardDeck from "react-bootstrap/CardDeck";
import axios from 'axios'

export class Recipes extends Component {

  render() {
    // let recipesData = this.props.recipesData;

    return (
      this.props.foodData.map(data => {
        return (
          <div>
            <CardDeck>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{data.label}</Card.Title>
                  <Card.Img>
                    {data.img}
                  </Card.Img>
                  <Card.Text>
                    {data.ingridients}
              </Card.Text>
                </Card.Body>
                <Card.Footer>
                  {data.calories}
                </Card.Footer>
              </Card>
            </CardDeck>
          </div>
        )

      })

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
    );
  }
}

export default Recipes;
