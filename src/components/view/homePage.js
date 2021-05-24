import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import sushi from '../../assests/sushi.jpg';
import waffle from '../../assests/waffle.jpg';
import parmizan from '../../assests/parmizan.jpg';
import { withAuth0 } from '@auth0/auth0-react';
import Footer from '../utilites/footer';

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
{/* {isAuthenticated && */}
      <div className='homePage'>
        {/* { (this.props.showCards) ? */}


          <div className='homebk'>
            <h1 className='head' style={{fontFamily: "'Signika', sans-serif;", fontWeight:"bold"}}>Recipes By Category</h1>
            <hr className='hr' />

            <CardColumns
              style={{ width: '70%', textAlign: 'center', marginLeft: '200px', marginBottom: '200px' }}
            >
              <Card style={{ width: '23rem', marginBottom: '100px' }}>
                <Card.Body>
                  <Card.Img className='cardsImage' onClick={this.props.updateRender}
                    style={{ height: '24rem', width: '20rem', marginBottom: '2rem', borderRadius:"10px" }}
                    src='https://foodhub.modeltheme.com/wp-content/uploads/2020/01/burger_categ-400x500.jpg'
                  />
                  <Card.Link className='link'
                    style={{ color: '#997b66' }}
                    href="http://localhost:3000/blogs"
                  ><h3 style={{ fontFamily: "'Signika', sans-serif;"}}>Burgers</h3></Card.Link>

                </Card.Body>
              </Card>





              <Card style={{ width: '23rem' }}>
                <Card.Body >
                  <div className='imageCont'>
                    <Card.Img className='cardsImage' onClick={this.props.updateRender}
                      style={{ height: '24rem', width: '20rem', marginBottom: '2rem', borderRadius:"10px" }}
                      src='https://foodhub.modeltheme.com/wp-content/uploads/2020/01/pizza_categ-400x500.jpg'

                    />
                  </div>
                  <Card.Link className='link'
                    style={{ color: '#997b66' }}
                    href="http://localhost:3000/blogs"
                  ><h3 style={{ fontFamily: "'Signika', sans-serif;"}}>Pizzas</h3></Card.Link>
                </Card.Body>
              </Card>

              <Card style={{ width: '23rem' }}>
                <Card.Body>
                  <Card.Img className='cardsImage' onClick={this.props.updateRender}
                    style={{ height: '24rem', width: '20rem', marginBottom: '2rem', borderRadius:"10px" }}
                    src='https://foodhub.modeltheme.com/wp-content/uploads/2020/01/drinks_categ-400x500.jpg'
                    href=''
                  />
                  <Card.Link className='link'
                    style={{ color: '#997b66' }} href="http://localhost:3000/blogs"
                  ><h3 style={{ fontFamily: "'Signika', sans-serif;"}}>Drinks</h3></Card.Link>

                </Card.Body>
              </Card>

            </CardColumns>

            <br />

          </div>
          {/* : null
        } */}


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
                <Card.Subtitle className="mb-2 text-muted">Drinks</Card.Subtitle>
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

      <Footer />
      </div>
      {/* } */}
</>

    );
  }
}

export default withAuth0(Home);
