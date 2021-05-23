import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import CardDeck from "react-bootstrap/CardDeck";

export class Recipes extends Component {
  render() {
    // let recipesData = this.props.recipesData;
    return (
      <div>
        <CardDeck>
          {/* {recipesData.map((data) => { */}
          {/* return ( */}
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="{data[1]}" />
            <Card.Body>
              <Card.Title>Yousef</Card.Title>
              <Card.Text>
                Cuisine Type: Mariam Dish Type: Dinner Total Calories: 2000
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button
                variant="primary"
                onClick={() => this.props.showModalFunc()}
              >
                Recipe
              </Button>
            </Card.Footer>
          </Card>
          {/* ); */}
          {/* })} */}
        </CardDeck>
      </div>
    );
  }
}

export default Recipes;
