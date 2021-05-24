import React, { Component } from 'react';
import '../assets/header.css';
import logo from '../assets/logo_transparent.png';
import LoginButton from './login';
// import { Link} from "react-router";


export class Header extends Component {
  render() {
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
              <li><a href="#">Home</a></li>
              <li><a href="http://localhost:3000/recipes">My Recipies</a></li>
              <li><a href="http://localhost:3000/blogs">Blog</a></li>
              <li><a href="http://localhost:3000/profile">profile</a></li>
              <li><a href="#">Contact Us</a></li>
              <li >
                  <LoginButton />

              </li>
            </ul>
          </nav>
        </div>


      </>
    );
  }
}

export default Header;

