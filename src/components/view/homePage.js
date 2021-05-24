import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import sushi from '../../assests/sushi.jpg';
import waffle from '../../assests/waffle.jpg';
import parmizan from '../../assests/parmizan.jpg';
import { withAuth0 } from '@auth0/auth0-react';

// import Image from 'react-bootstrap/Image';
// import Row from 'react-bootstrap/Row';
// import pasta from '../assests/pastaa.jpg';
// import cor from '../assests/corr.jpg';
// import Container from 'react-bootstrap/Container';
// import Carousel from 'react-bootstrap/Carousel';
// import Col from 'react-bootstrap/Col';
// import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
// import { MDBMask, MDBView } from "mdbreact";


class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     showHover: false,
  //   }
  // }


  render() {
    const { user, isAuthenticated } = this.props.auth0;
    return (


      <>
        {isAuthenticated &&
          <div>
            {(this.props.showCards) ?


              <div className='homebk'>
                <h1 className='head'>Food and Cook</h1>
                <hr className='hr' />
                <ListGroup className='list' horizontal='lg' active
                >
                  <ListGroup.Item>nutrition</ListGroup.Item>
                  <ListGroup.Item> pasta</ListGroup.Item>
                  <ListGroup.Item>sushi</ListGroup.Item>
                  <ListGroup.Item>meat</ListGroup.Item>
                </ListGroup>

                <CardColumns
                  style={{ width: '70%', textAlign: 'center', marginLeft: '200px', marginBottom: '200px' }}
                >


                  <Card style={{ width: '23rem', marginBottom: '100px' }}>
                    <Card.Body>
                      <Card.Img className='cardsImage' onClick={this.props.updateRender}
                        style={{ height: '17rem', width: '20rem', marginBottom: '2rem' }}
                        src='https://foodhub.modeltheme.com/wp-content/uploads/2020/01/burger_categ-400x500.jpg'
                      />
                      <Card.Subtitle style={{ opacity: '0' }} className="mb-2 text-muted">Card Subtitle</Card.Subtitle>

                      <Card.Link className='link'
                        style={{ fontFamily: 'italic', color: '#997b66' }}
                        href="http://localhost:3000/blogs"
                      >See More</Card.Link>

                    </Card.Body>
                  </Card>





                  <Card style={{ width: '23rem' }}>
                    <Card.Body >
                      <div className='imageCont'>
                        <Card.Img className='cardsImage' onClick={this.props.updateRender}
                          style={{ height: '17rem', width: '20rem', marginBottom: '2rem' }}
                          src='https://foodhub.modeltheme.com/wp-content/uploads/2020/01/pizza_categ-400x500.jpg'

                        />
                      </div>
                      <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>

                      <Card.Link className='link'
                        style={{ fontFamily: 'italic', color: '#997b66' }}
                        href="http://localhost:3000/blogs"
                      >See More</Card.Link>
                    </Card.Body>
                  </Card>

                  <Card style={{ width: '23rem' }}>
                    <Card.Body>
                      <Card.Img className='cardsImage' onClick={this.props.updateRender}
                        style={{ height: '17rem', width: '20rem', marginBottom: '2rem' }}
                        src='https://foodhub.modeltheme.com/wp-content/uploads/2020/01/drinks_categ-400x500.jpg'
                      />
                      <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>

                      <Card.Link className='link'
                        style={{ fontFamily: 'italic', color: '#997b66' }} href="http://localhost:3000/blogs"
                      >See More</Card.Link>

                    </Card.Body>
                  </Card>

                </CardColumns>

                {/* <MDBContainer>
              <MDBRow>
                <MDBCol>
                  <MDBView hover zoom>
                    <img
                      src="https://mdbootstrap.com/img/Others/documentation/img%20(131)-mini.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <MDBMask className="flex-center" overlay="red-slight">
                      <p className="white-text">Super light overlay</p>
                    </MDBMask>
                  </MDBView> </MDBCol>


              </MDBRow>
            </MDBContainer>
 */}


                <br />

              </div>
              : null
            }


            <div className='slider'>
              <h2
                style={{ fontFamily: `MeriendaOne, cursive`, textAlign: 'center' }}
              >
                Our Blogs
          </h2>
              <hr />


              <CardColumns
                style={{ width: '70%', textAlign: 'center', marginLeft: '200px' }}
              >


                <Card style={{ width: '23rem', marginBottom: '100px' }}>
                  <Card.Body onClick={<a href="http://localhost:3000/blogs" > ygguyfuyfuyfyuf</a>} >
                    <Card.Img className='cardsImage' onClick={this.props.updateRender}
                      style={{ height: '17rem', width: '20rem', marginBottom: '2rem', }}
                      src={sushi}
                    />
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text >
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                </Card.Text>
                    <Card.Link className='link'
                      style={{ fontFamily: 'italic', color: '#997b66' }}
                      href="http://localhost:3000/blogs"
                    >See More</Card.Link>

                  </Card.Body>
                </Card>


                <Card style={{ width: '23rem' }}>
                  <Card.Body >
                    <div className='imageCont'>
                      <Card.Img className='cardsImage' onClick={this.props.updateRender}
                        style={{ height: '17rem', width: '20rem', marginBottom: '2rem' }}
                        src={waffle}
                      />
                    </div>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text
                    //  className='overlay' 
                    >
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                </Card.Text>
                    <Card.Link className='link'
                      style={{ fontFamily: 'italic', color: '#997b66' }}
                      href="http://localhost:3000/blogs"
                    >See More</Card.Link>
                  </Card.Body>
                </Card>

                <Card style={{ width: '23rem' }}>
                  <Card.Body>
                    <Card.Img className='cardsImage' onClick={this.props.updateRender}
                      style={{ height: '17rem', width: '20rem', marginBottom: '2rem' }}
                      src={parmizan}
                    />
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text >
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                </Card.Text>
                    <Card.Link className='link'
                      style={{ fontFamily: 'italic', color: '#997b66' }} href="http://localhost:3000/blogs"
                    >See More</Card.Link>

                  </Card.Body>
                </Card>

              </CardColumns>
            </div>

          </div>}
      </>

    );
  }
}

export default withAuth0(Home);
