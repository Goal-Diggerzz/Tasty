import BlogModal from '../utilites/blogModal'
import React, { Component } from 'react'
import { Form, Row, Col, Button, Card, Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Blog from '../utilites/blog';
import '../../assets/blog.css';

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
        <Button variant="primary" onClick={this.handleShow}>
          Post new Blog
            </Button>
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
        <div className="container-fluid d-flex justify-content-center container-fluid1">
          <div className="row">
          <div className="col-md-4 md-41">
            <div className="card text-center card1">
              <div className="overflow overflow1">
                <img src="https://www.seriouseats.com/thmb/TCo4MAh5Jy4y5Q1oc1BVx5z9_ho=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2012__09__20120914-smashed-burgers-10-260d32eebb994b60b0a0f078e904f65f.jpg" alt="" className="card-img-top imgtop1" />
              </div>
              <div className="card-body text-dark card-body1">
                <h4 className="card-title">
                  Classic Smashed Burgers Recipe
      </h4>
                <p className="card-text card-text1 text-secondary">
                  By J. Kenji López-Alt
      </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 md-41">
            <div className="card text-center card1">
              <div className="overflow overflow1">
                <img src="https://www.seriouseats.com/thmb/CnsS6yn6NXiid0lqmFzYizg56ns=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__08__20200817-Panaeng-Neua-derek-lucci-1-26689646c93c4889bdd1de4f6b763af2.jpg" alt="" className="card-img-top imgtop1" />
              </div>
              <div className="card-body text-dark card-body1">
                <h4 className="card-title">
                Panang Neua (Thai Panang Beef Curry) Recipe
      </h4>
                <p className="card-text card-text1 text-secondary">
                  By J. Kenji López-Alt
      </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 md-41">
            <div className="card text-center card1">
              <div className="overflow overflow1">
                <img src="https://www.seriouseats.com/thmb/DnWB-PZBxur68tk5BsaB6vORpyg=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2017__12__20171201-bravetart-brownies-vicky-wasik-15-8f17e2742f05443ead4de0b887d339fb.jpg" alt="" className="card-img-top imgtop1" />
              </div>
              <div className="card-body text-dark card-body1">
                <h4 className="card-title">
                Glossy Fudge Brownies Recipe | BraveTartClassic Smashed Burgers Recipe
      </h4>
                <p className="card-text card-text1 text-secondary">
                By Stella Parks
      </p>
              </div>
            </div>
          </div>
           
          </div>
        </div>
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
                  />

              }))
            } </div></div>}
        </Container>
       
      </>
    )
  }
}

export default withAuth0(blogs);
