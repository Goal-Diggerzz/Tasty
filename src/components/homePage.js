import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
// import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import pasta from '../assests/pastaa.jpg';
import cor from '../assests/corr.jpg';
import sushi from '../assests/sushi.jpg';
import waffle from '../assests/waffle.jpg';
import parmizan from '../assests/parmizan.jpg';
class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     showHover: false,
  //   }
  // }


  render() {

    return (
      <div className='homebk'>
        <h1 className='head' style={{ textAlign: 'center' }}>Food and Cook</h1>
        <hr className='hr' />
        <ListGroup className='list' horizontal='lg' active
        >
          <ListGroup.Item>nutrition</ListGroup.Item>
          <ListGroup.Item> pasta</ListGroup.Item>
          <ListGroup.Item>sushi</ListGroup.Item>
          <ListGroup.Item>meat</ListGroup.Item>
        </ListGroup>


        <Container className='container'>
          <Row>
            <Col xs={6} md={4}>
              <Image className='img' style={{ boxShadow: '-10px 10px 7px  rgba(83, 81, 81, 0.945)' }} src={pasta} roundedCircle />
            </Col>
            <Col xs={6} md={4}>
              <Image className='img' src={cor} roundedCircle
                style={{ boxShadow: '-10px 10px 7px  rgba(83, 81, 81, 0.945)' }} />
            </Col>
            <Col xs={6} md={4}>
              <Image className='img' src={pasta} roundedCircle
                style={{ boxShadow: '-10px 10px 7px  rgba(83, 81, 81, 0.945)' }} />
            </Col>
          </Row>
        </Container>
        <br />

        <div className='slider'>
          <h2 style={{ fontFamily: `MeriendaOne, cursive`, textAlign: 'center' }}>
            Our Blogs
          </h2>
          <hr />

          <CardColumns style={{ width: '70%', textAlign: 'center', marginLeft: '200px' }}>


            <Card style={{ width: '23rem', position: 'relative', marginBottom: '100px' }}>
              <Card.Body>
                <Image style={{ height: '17rem', width: '20rem', marginBottom: '2rem' }} src={sushi} />
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text className='overlay'>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Card.Link className='link' style={{ fontFamily: 'italic', color: '#997b66' }} href="#">See More</Card.Link>

              </Card.Body>
            </Card>


            <Card style={{ width: '23rem' }}>
              <Card.Body >
                <div className='imageCont'>
                  <Image style={{ height: '17rem', width: '20rem', marginBottom: '2rem' }} src={waffle} />
                </div>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text className='overlay' >
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Card.Link className='link' style={{ fontFamily: 'italic', color: '#997b66' }} href="#">See More</Card.Link>
              </Card.Body>
            </Card>

            <Card style={{ width: '23rem', position: 'relative' }}>
              <Card.Body>
                <Image style={{ height: '17rem', width: '20rem', marginBottom: '2rem' }} src={parmizan} />
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text className='overlay'>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Card.Link className='link' style={{ fontFamily: 'italic', color: '#997b66' }} href="#">See More</Card.Link>

              </Card.Body>
            </Card>

          </CardColumns>
        </div>

      </div>


    );
  }
}

export default Home;
