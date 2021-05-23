

import React, { Component } from 'react';
import Home from './components/homePage';
import Header from './components/header';
import Recipes from './components/recipes';
import ModalApp from './components/modalApp';
import Footer from './components/footer';
import Blogs from './components/blogs';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showCards: true,
      recipiesData: '',
      imgPath: '',
      title: '',
      description: '',
    };
  }



  updateRender = (e) => {

    e.preventDefault();
    this.setState({
      showCards: false,

    });
    console.log('this is showCards', this.state.showCards);
  }




  getRecipesData = async () => {

    const url = `${process.env.REACT_APP_SERVER}/recipes`;

    const expressReq = await axios.get(url);
    console.log(expressReq.data);
    this.setState({
      recipiesData: expressReq.data,
      showModal: true

    });





  }


  clickRecipeFun = (e) => {





  }


  showModalFunc = () => {
    this.setState({
      showModal: true,
    });
  };
  closeModal = () => {
    this.setState({
      showModal: false,
    });
  };
  render() {

    // const { isAuthenticated } = this.props.auth0;

    return (

      <>
        <div>
        </div>
        <Header />
        <Router>
          <switch>

            <Route exact path="/recipes">
              <Recipes showModalFunc={this.showModalFunc}
                getRecipesData={this.getRecipesData}
              />
            </Route>

            <Route exact path="/blogs">
              <Blogs />

            </Route>


          </switch>
          <ModalApp closeModal={this.closeModal} showModal={this.state.showModal} />


        </Router>
        <Home
          updateRender={this.updateRender}
          showCards={this.state.showCards}

        />
        <Footer />
      </>

    );
  }
}

export default App;
