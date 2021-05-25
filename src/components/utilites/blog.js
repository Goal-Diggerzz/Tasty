import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import { withAuth0 } from '@auth0/auth0-react';

export class blog extends Component {
    render() {
      const {user}=this.props.auth0

        return (
          
          <div className="col-md-4">
          <div className="card text-center shadow">
          <div className="overflow">
            <img src={this.props.img} className="card-img-top"/>
          </div>
          <div className="card-body text-dark">
            <h4 className="card-title">
              {this.props.title}
            </h4>
            <p className="card-text text-secondary">
            {this.props.name}
            </p>
            <a href="#" className="btn btn-outline-success">
              See More
            </a>
            {user.email===this.props.email && <Button>Remove</Button> }
            </div>  
        </div>
        </div>
        )
    }
}

export default withAuth0(blog);
