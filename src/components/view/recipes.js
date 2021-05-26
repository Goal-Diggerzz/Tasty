import React, { Component } from "react";
import { Card, CardDeck, Button, Col } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Popover from 'react-bootstrap/Popover';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import HeaderPhoto from '../utilites/headerPhoto'
import Footer from "../utilites/footer";

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
      welShow: false,


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
    // setTimeout(() => {console.log(this.props)}, 2000);

    return (


      <>
      <HeaderPhoto/>
        {this.state.myLabel ? null
          :

          <Jumbotron>
            <h1 style={{ fontFamily: `'Josefin Sans', sans-serif`, color: 'rgb(20, 63, 83)', fontWeight: 'bolder' }}>Havent Discovered our Delicious Recipies Yet! </h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>

          </Jumbotron>
        }
        <Container>
          <Row md={3}
          //  style={{ marginTop: '100px', width: '90%', marginLeft: '10%' }}
          >

            {this.props.foodData.map((data, idx) => {
              return (

                <Col>

                  <Card key={idx} style={{ width: "20rem", height: '27rem', marginBottom: '20px' }} >
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
                    <Card.Body className='text-center'>
                      <Card.Title style={{ fontFamily: `'Josefin Sans', sans-serif`, color: 'rgb(20, 63, 83)', fontWeight: 'bolder', marginTop: '20px' }}
                      >{data.label}</Card.Title>
                      {/* <a
                     href='http://localhost:3000/selected'


                    // onClick={() => this.props.addFav(data)}
                    > */}


                      {/* {data.img} */}

                      {/* </a> */}

                      <Button variant="primary" style={{ backgroundColor: 'white', color: 'rgb(20, 63, 83)', marginBottom: '40px' }} onClick={() => this.props.addFav(data)}> Add To Favorite❤️</Button>

                    </Card.Body>
                    {/* <Card.Footer>
                    <p>Calories</p>{data.calories}
                  </Card.Footer> */}

                    {/* <Button onClick={(e) => this.showFunc(e)} variant="primary">Go somewhere</Button> */}

                  </Card>
                </Col>
              )

            })}

          </Row>
        </Container>
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
                ingredients of  {this.state.myLabel}
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
<Footer/>
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
