import React, { Component } from "react";
import { Card, CardDeck, Button } from "react-bootstrap";
import CardColumns from 'react-bootstrap/CardColumns';
import Modal from 'react-bootstrap/Modal';
import Popover from 'react-bootstrap/Popover';
import ListGroup from 'react-bootstrap/ListGroup';
// import RecipesPopUp from './popUpRecipes'
// import CardDeck from "react-bootstrap/CardDeck";
// import axios from 'axios';
let recipesData = [];

export class Recipes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      close: true,
      selectedOne: '',
      allData: '',
      myLabel: '',
      alt: '',
      img: '',

    }


  }
  theRecipe = (e) => {
    // this.showFunc();
    this.setState({
      myLabel: e.target.name,
      alt: e.target.alt,
      img: e.target.src,
    })
    console.log('this the the Event of Recipe', e.target);


  }
  getArr = () => {
    this.setState({
      allData: JSON.parse(localStorage.getItem('recipesFromApi')),
    })

  }

  showFunc = (e) => {
    this.setState({
      show: true,
    }

    );
    console.log('the show ', this.state.show);
    this.theRecipe(e);
  }


  closeFunc = () => {
    this.setState({
      show: false
    }

    );
    // console.log('the show ', this.show);
  }


  render() {
    recipesData = this.props.foodData;
    console.log('the recipes data', this.props.foodData);
    return (

      <>

        <CardColumns style={{ marginTop: '100px', width: '89%', marginLeft: '10%' }}>

          {recipesData.map((data, idx) => {
            return (
              <div>


                <Card key={idx} style={{ width: "20rem", height: '27rem' }}>
                  <Card.Body>
                    <Card.Title style={{ fontFamily: `'Josefin Sans', sans-serif`, color: 'rgb(20, 63, 83)', fontWeight: 'bolder' }}
                    >{data.label}</Card.Title>
                    {/* <a
                     href='http://localhost:3000/selected'


                    // onClick={() => this.props.addFav(data)}
                    > */}
                    <div style={{ overflow: 'hidden' }}>
                      <Card.Img
                        className='zoomPic'
                        // onClick={this.props.addFav(data)}


                        src={data.img}
                        name={data.label}
                        alt={data.ingredients}
                        onClick={(e) => this.showFunc(e)}

                      />
                    </div>

                    {/* {data.img} */}

                    {/* </a> */}


                    <Card.Text>

                    </Card.Text>
                  </Card.Body>
                  {/* <Card.Footer>
                    <p>Calories</p>{data.calories}
                  </Card.Footer> */}
                  <Button variant="primary" style={{ backgroundColor: 'white', color: 'rgb(20, 63, 83)', marginLeft: '60px', marginBottom: '40px' }} onClick={() => this.props.addFav(data)}> Add To Favorite❤️</Button>
                  {/* <Button onClick={(e) => this.showFunc(e)} variant="primary">Go somewhere</Button> */}

                </Card>
              </div>
            )

          })}

        </CardColumns>
        {
          this.state.show &&
          // <RecipesPopUp
          //   // closeFunc={this.closeFunc}
          //   // showFunc={this.showFunc}
          //   // show={this.state.show}
          //   // close={this.state.close}
          //   myLabel={this.state.myLabel}
          //   alt={this.state.alt}
          //   img={this.state.alt}

          // />
          // <Popover id="popover-basic">
          //   <Popover.Title as="h3">Popover right</Popover.Title>
          //   <Popover.Content>
          //     And here's some <strong>amazing</strong> content. It's very engaging.
          //   right?
          // </Popover.Content>
          // </Popover>


          < Modal
            show={this.state.show}
            onHide={this.closeFunc}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title style={{ fontFamily: `'Josefin Sans', sans-serif`, color: 'rgb(20, 63, 83)', fontWeight: 'bolder' }} id="example-custom-modal-styling-title">
                {this.state.myLabel}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ListGroup variant="flush">
                {this.state.alt.split(',').map(ingredient =>

                  <ListGroup.Item style={{
                    fontFamily: `'Josefin Sans', sans-serif`, color: 'rgb(20, 63, 83)', fontSize: '20px'
                  }} variant="secondary">{ingredient}</ListGroup.Item>

                )}

              </ListGroup>

            </Modal.Body>
          </Modal>

        }

      </>
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
