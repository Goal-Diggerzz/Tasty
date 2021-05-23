import React, { Component } from "react";
import Footer from "./components/footer";
import Recipes from "./components/recipes";
import ModalApp from "./components/modalApp";
import axios from 'axios';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }
  getRecipesData = async() =>{
    const queries = {
      
    }
    const url = `${REACT_APP_SERVER}/recipes`
    const recipesData = await axios.get(url, {queries: queries})
    console.log(recipesData)
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
    return (
      <div>
        <h1>Hi</h1>
        <Recipes showModalFunc={this.showModalFunc} />
        <ModalApp closeModal={this.closeModal} showModal={this.state.showModal} />
        <Footer />
      </div>
    );
  }
}

export default App;
