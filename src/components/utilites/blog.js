import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import { withAuth0 } from '@auth0/auth0-react';

export class blog extends Component {
    render() {
      const {user}=this.props.auth0

        return (
          
          <div className="col-md-4 md-41">
          <div className="card text-center shadow card1">
          <div className="overflow overflow1">
            <img src={this.props.img} className="card-img-top imgtop1"/>
          </div>
          <div className="card-body text-dark card-body1">
            <h4 className="card-title">
              {this.props.title}
            </h4>
            <p className="card-text text-secondary card-text1">
           Posted By {this.props.name}
            </p>
            <a href="#" className="btn btn-outline-success">
              See More
            </a>
            {user.email===this.props.email && <Button onClick={()=>this.props.removeBlog(this.props.idx)} variant='danger'>Remove</Button> }
            </div>  
        </div>
        </div>
        )
    }
}

export default withAuth0(blog);
