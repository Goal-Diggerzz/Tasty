import { withAuth0 } from '@auth0/auth0-react';
import React, { Component } from 'react';
import '../../assets/header.css';
import logo from '../../assets/logo_transparent.png';
import LoginButton from '../login';
import LogoutButton from '../utilites/logout'
// import { Link} from "react-router";
import Dropdown_myaccount from '../view/Dropdown_myaccount' 


export class Header extends Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    // const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <div id="abc">
          <div id='logo'>
            <h1>
              <a>
                <img src={logo} alt="Foodhub" />
              </a>
            </h1>
          </div>
          <nav>
            <ul>
              <li ><a href={'/'}>Home</a></li>
              <li link={'/recipes'}><a href="/recipes">My Recipies</a></li>
              <li><a href="http://localhost:3000/blogs">Blog</a></li>
              <li><a href="http://localhost:3000/profile">profile</a></li>
              <li><a href="http://localhost:3000/AboutUs">About Us</a></li>
              <li >
                {(isAuthenticated) ?
                  <Dropdown_myaccount />
                  :
                  <LoginButton />
                }

              </li>
            </ul>
          </nav>
        </div>


      </>
    );
  }
}

export default withAuth0(Header);

