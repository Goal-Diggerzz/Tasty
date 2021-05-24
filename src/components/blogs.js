import React, { Component } from 'react'
import { Form, Row, Col, Button, Card } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';

export class blogs extends Component {


  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      comment: '',
      blog: '',
      showBlog: false,
      showComment: false,
    };
  }

  updateName = (e) => this.setState({ name: e.target.value });
  updateEmail = (e) => this.setState({ email: e.target.value });
  updateblog = (e) => this.setState({ blog: e.target.value });
  // updateComment = (e) => this.setState({ comment: e.target.value });


  addBlog = () => {
    console.log(this.state.comment);
    this.setState({
      showBlog: true
    })
  };
  addComment = () => {
    console.log(this.state.comment);
    this.setState({
      showComment: true
    })
  };

  render() {

    return (
      <>
        <div className='blogs'>
          <Form >
            <Form.Label>Write Your Blog</Form.Label>
            <Row>
              <Col>
                <Form.Control value={this.state.name} onChange={this.updateName} placeholder="Name" />
              </Col>
              <Col>
                <Form.Control value={this.state.email} onChange={this.updateEmail} placeholder="E-mail" />
              </Col>
            </Row>
            <Row>
              {/* <Form.Control TOO ADD IMAGE /> */}
            </Row>
            <Row>
              <Form.Control value={this.state.blog} onChange={this.updateblog} style={{ height: '200px', width: '90%', marginLeft: '78px', marginTop: '20px', marginBottom: '20px' }} placeholder="Comment..." />
            </Row>
            <Button onClick={this.addBlog}>Post</Button>
            {(this.state.showBlog) &&
              <Row>
                {/* <p>
                  {this.state.blog}
                </p> */}

                <Card style={{
                  width: '18rem', display: 'contents', textAlign: 'center', marginTop: '20px'

                }}>
                  <Card.Body>
                    <Card.Title>{this.state.name}</Card.Title>
                    <Card.Text>
                      {this.state.blog}
                    </Card.Text>


                  </Card.Body>
                </Card>

                {/* <Form.Control value={this.state.comment} onChange={this.updateComment} placeholder="Comment" />
                <Button onClick={this.addComment}>Reply</Button>
              </Row>}
            {(this.state.showComment) &&
              <Row>
                <p>
                  {this.state.comment}
                </p> */}
              </Row>}
          </Form>
        </div>
      </>
    )
  }
}

export default withAuth0(blogs);
