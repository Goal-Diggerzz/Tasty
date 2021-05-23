import React, { Component } from 'react';
import '../assets/header.css';
import logo from '../assets/logo_transparent.png'

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
      <li><a href="#">My Recipies</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Contact Us</a></li>
      <li><a href="#">Log in</a></li>
    </ul>
  </nav>
</div>


</>
    );
  }
}

export default Header;

