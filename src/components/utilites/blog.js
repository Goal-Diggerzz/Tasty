import React, { Component } from 'react'
import {Card,Col,Button} from 'react-bootstrap'
export class blog extends Component {
    render() {
        return (
            <Col>
            <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://www.seriouseats.com/thmb/DnWB-PZBxur68tk5BsaB6vORpyg=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2017__12__20171201-bravetart-brownies-vicky-wasik-15-8f17e2742f05443ead4de0b887d339fb.jpg" />
          <Card.Body>
            <Card.Title>Glossy Fudge Brownies Recipe | BraveTart</Card.Title>
            <Card.Text>
            By Stella Parks
            </Card.Text>
            <Button variant="primary">Show more</Button>
          </Card.Body>
        </Card>
            </Col>
        )
    }
}

export default blog
