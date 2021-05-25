import React, { Component } from 'react'
import { Form, Row, Col, Button, Card,Container,ListGroup,ListGroupItem } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Blog from '../utilites/blog';
import  '../../assets/blog.css';
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
      show:false,
      blogData:[],

    };
  }
   handleShow = () => this.setState({show:true})
  updateName = (e) => this.setState({ name: e.target.value });
  updateEmail = (e) => this.setState({ email: e.target.value });
  updateblog = (e) => this.setState({ blog: e.target.value });
  // updateComment = (e) => this.setState({ comment: e.target.value });
  getBlogs=async ()=>{
    const {user}=this.props.auth0
    const blogUrl = `http://localhost:3001/blog?${user.email}`
    const reqBlogData=await axios.get(blogUrl);
this.setState({
blogData:reqBlogData.data,

}) 
console.log(this.state.blogData);

}


componentDidMount(){
  const {isAuthenticated}=this.props.auth0;
  console.log(isAuthenticated);

 ( isAuthenticated && this.getBlogs())
}

addBlog = async (e) => {
  e.preventDefault();

  const url = `http://localhost:3001/blog`;
  
  const sendedblog={
    Image:this.state.img,
    text: this.state.name,
    userName:this.state.comment,

  }
  const newBlog = await axios.post(url,sendedblog);
 

  this.setState({
   blogData:newBlog.data
  });

} 
  addComment = () => {
    console.log(this.state.comment);
    this.setState({
      showComment: true
    })
    
  };

  render() {
const {user}=this.props.auth0
    return (
      <>
      <Button variant="primary" onClick={this.handleShow}>
              Launch demo modal
            </Button>
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
            <Button onClick={(e)=>this.addBlog(e)}>Post</Button>
            {(this.state.showBlog) &&
              <Row>
                <p>
                  {this.state.blog}
                </p>



                <Form.Control value={this.state.comment} onChange={this.updateComment} placeholder="Comment" />
                <Button onClick={this.addComment}>Reply</Button>
              </Row>}
            {(this.state.showComment) &&
              <Row>
                <p>
                  {this.state.comment}
                </p>
              </Row>}
          </Form>
 
        </div>
        <Container>
  
  <Row >
    <Col xs={12} md={4}>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.seriouseats.com/thmb/TCo4MAh5Jy4y5Q1oc1BVx5z9_ho=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2012__09__20120914-smashed-burgers-10-260d32eebb994b60b0a0f078e904f65f.jpg" />
  <Card.Body>
    <Card.Title>Classic Smashed Burgers Recipe</Card.Title>
    <Card.Text>
      By J. Kenji López-Alt
    </Card.Text>
    <Button variant="primary">Show more</Button>
  </Card.Body>
</Card>
    </Col >
    <Col xs={12} md={4}>  
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.seriouseats.com/thmb/CnsS6yn6NXiid0lqmFzYizg56ns=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__08__20200817-Panaeng-Neua-derek-lucci-1-26689646c93c4889bdd1de4f6b763af2.jpg" />
  <Card.Body>
    <Card.Title>Panang Neua (Thai Panang Beef Curry) Recipe</Card.Title>
    <Card.Text>
    By Derek Lucci
    </Card.Text>
    <Button variant="primary">Show more</Button>
  </Card.Body>
</Card>
</Col>
    <Col xs={12} md={4}>
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
  </Row>
  { this.state.blogData !==[] && <Row>
    {
                this.state.blogData.map(data=>
                    <Blog 
                    email={user.email}
                    img={this.state.blogData.title}
                    title={this.state.blogData.title}
                    description={this.state.blogData.description} />
                       
                    )
                 } </Row>}
</Container>
      </>
    )
  }
}

export default withAuth0(blogs);
