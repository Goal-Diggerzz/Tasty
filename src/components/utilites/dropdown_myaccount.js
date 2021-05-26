import React, { Component } from 'react';
import { Dropdown } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";

export class Dropdown_myaccount extends Component {
    
    render() {
        const { user, isAuthenticated } = this.props.auth0;
        return (
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        My Account
                     </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-3"> <img className='imgaccount' src={user.picture} alt='' /></Dropdown.Item>
                        <Dropdown.Item href="#/action-1">User Name:{user.name}</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Email:{user.email}</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">****Add logout button****</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}

export default withAuth0(Dropdown_myaccount)
