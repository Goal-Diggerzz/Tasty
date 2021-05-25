import React, { Component } from 'react'
import {Form,Modal,Row,Col,Button} from 'react-bootstrap'
export class BlogModal extends Component {
    render() {
      console.log(this.props);
        return (
            <>
            
      
            <Modal show={this.props.show} onHide={this.props.handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <div className='blogs'>
            <Form style={{width:'80%',margin:'0 auto'}}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={this.props.email} onChange={this.props.updateEmail}/>
    
  </Form.Group>
  <Form.Group >
    <Form.Label>Your Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your name" onChange={this.props.updateName} />
    
  </Form.Group>
  <Form.Group >
    <Form.Label>Your Blog's Image Url</Form.Label>
    <Form.Control type="text" 
    placeholder="Enter image url for example :https://images1.boardingschoolreview.com/photo/img-academy-metBzc.jpg" 
    onChange={this.props.updateImg} />
    
  </Form.Group>
  
 
  <Form.Group >
    <Form.Label>Blog's Title</Form.Label>
    <Form.Control type="text" placeholder="Enter your blog's title" onChange={this.props.updatetitle} />
    
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Blog's content</Form.Label>
    <Form.Control as="textarea" rows={7} placeholder="Enter your blog's title" onChange={this.props.updateText} />
    
  </Form.Group>

 
  
  <Button variant="primary" type="submit" onClick={this.props.addBlog}>
    Submit
  </Button>
</Form>

        </div>
            </Modal>
          </>
        )
    }
}

export default BlogModal
