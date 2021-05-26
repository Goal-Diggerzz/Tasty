import BlogModal from '../utilites/blogModal'
import React, { Component } from 'react'
import { Form, Row, Col, Button, Card, Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Blog from '../utilites/blog';
import '../../assets/blog.css';
import {
  BrowserRouter as Router,
Link
} from "react-router-dom";
import HeaderPhoto from '../utilites/headerPhoto'


export class blogs extends Component {


  constructor(props) {
    super(props);
    this.state = {
      email:'',
      name: '',
     img:'',
      text:'',
      title:'',
      show: false,
      blogData: [],
      cardData:[],

    };
  }
  handleShow = () => { this.setState({ show: true })
console.log(this.state.show);
}
  handleClose = () => this.setState({ show: false })
  
  updateName = (e) => this.setState({ name: e.target.value });
  updateText = (e) => this.setState({ text: e.target.value });
  updatetitle = (e) => this.setState({ title: e.target.value });
  updateImg = (e) => this.setState({ img: e.target.value });
  updateEmail = (e) => this.setState({ email: e.target.value });


  getBlogs = async () => {
    const { user } = this.props.auth0
    const blogUrl = `http://localhost:3001/blog`
    const reqBlogData = await axios.get(blogUrl);
    console.log(reqBlogData.data);
    this.setState({
      blogData: reqBlogData.data,
      email:user.email

    })
    console.log(this.state.blogData);

  }

 


  componentDidMount() {
    const { isAuthenticated } = this.props.auth0;
    console.log(isAuthenticated);

    (isAuthenticated && this.getBlogs())
  }

  addBlog = async (e) => {

    const url = `http://localhost:3001/blog`;
    const {user}=this.props.auth0
    const sendedblog = {
      email:this.state.email,
      Image: this.state.img,
      title:this.state.title,
      text: this.state.text,
      userName: this.state.name,

    }
    const newBlog = await axios.post(url, sendedblog);


    this.setState({
      blogData: newBlog.data,
      email:user.email
    });
    console.log(this.state.blogData);

  }

  removeBlog =  (index)=>{
    
const blogsArr=this.state.blogData.filter((blog, idx)=>this.state.email===blog.email?blog:null

);
console.log(blogsArr);
    const blogsAfterDeletion = blogsArr.map((arr)=>arr.blog.filter((blog,idx)=>{
      return idx !== index;
    }));
    console.log(blogsAfterDeletion);
    // console.log(this.state.blogData);
    const {user} = this.props.auth0
    const query = {
      email: user.email
    }
     axios.delete(`http://localhost:3001/blog/${index}`, {params: query});
  
    window.location.reload();
  };
  

  render() {
    const { user } = this.props.auth0
    return (
      <>
      <HeaderPhoto/>
          <h2 className='stat1'> We Are Glad to Post Your Experinces With Us
        <br /> <br />
        Share Your Blog here
        <br /><br />
        </h2>
        <Button className='s2' variant="primary" onClick={this.handleShow}>
          Post new Blog
            </Button>

        {/* <h1 style={{ fontFamily: `'Merienda One', cursive`, color: 'rgb(20, 63, 83)', marginTop: '30px', textAlign: 'center', backgroundColor: 'rgba(74, 88, 95, 0.356)', }}> All kind of recipes are provided! <br /> <br />but here we have the recipes of the best Bloggers </h1> */}
            <BlogModal
        handleShow={this.handleShow}
        handleClose={this.handleClose}
        show={this.state.show}
        title={this.state.title}
        img={this.state.img}
        name={this.state.name}
        text={this.state.text}
        email={this.state.email}
        updateName={this.updateName}
        updateText={this.updateText}
        updatetitle={this.updatetitle}
        updateImg={this.updateImg}
        addBlog={this.addBlog}
        updateEmail={this.updateEmail}
        />
        
        <Container className="overflow">
         
          {this.state.blogData !== [] && <div className="container-fluid d-flex justify-content-center container-fluid1">
            <div className="row">{
              this.state.blogData.map((data) =>data.blog.map((blogData,idx)=>{
              console.log('idx',idx);
                   return <Blog
                  email={data.email}
                  img={blogData.Image}
                  title={blogData.title}
                  name={blogData.userName} 
                  text={blogData.text}
                  idx={idx} 
                  removeBlog={this.removeBlog}
                  getCardData={this.props.getCardData}
                  blogData={blogData}
                  />

              }))
            } </div></div>}
        </Container>
       
      </>
    )
  }
}

export default withAuth0(blogs);
