import React, { Component } from "react";
import {  Card, CardDeck, Button } from "react-bootstrap";
// import CardDeck from "react-bootstrap/CardDeck";
import axios from 'axios'

export class Recipes extends Component {

  render() {

    return (
      this.props.foodData.map(data => {
        return (
          <div>
            <CardDeck>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{data.label}</Card.Title>
                  <Card.Img src={data.img}>
                  </Card.Img>
                  <Card.Text>
                    {data.ingridients}
              </Card.Text>
                </Card.Body>
                <Card.Footer>
                  {data.calories}
                </Card.Footer>
                <Button variant="primary" onClick={()=>this.props.addFav(data)}>❤️</Button>
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
