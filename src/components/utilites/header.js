import React, { Component } from 'react';
import '../../assets/header.css';
import logo from '../../assets/logo_transparent.png';
import LoginButton from '../login';
// import { Link} from "react-router";
import { withAuth0 } from '@auth0/auth0-react';
import { Link } from "react-router-dom";


export class Header extends Component {
  render() {
    const {isAuthenticated}=this.props.auth0
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
              <li ><Link to="/">Home</Link> </li>
              <li ><Link to="/recipes">Recipes</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/Aboutus">About us</Link></li>
              {!isAuthenticated &&   <li >
                <LoginButton />

              </li>}
            </ul>
          </nav>
        </div>

      </>
    );
  }
}

export default withAuth0(Header);

