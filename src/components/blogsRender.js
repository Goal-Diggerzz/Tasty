import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import sushi from '../assests/sushi.jpg';
import waffle from '../assests/waffle.jpg';
import parmizan from '../assests/parmizan.jpg';
export class blogsRender extends Component {
    render() {
        return (
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
        )
    }
}

export default blogsRender
