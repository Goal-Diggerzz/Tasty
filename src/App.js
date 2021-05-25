

import React, { Component } from 'react';
import Home from './components/view/homePage';
import Header from './components/utilites/header';
import Recipes from './components/view/recipes';
import Search from './components/Search';
import ModalApp from './components/modalApp';
import Footer from './components/utilites/footer';
import Blogs from './components/view/blogs';
import AboutUs from './components/AboutUs';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Profile from './components/view/Profile'
import IsLoadingAndError from './components/utilites/loading'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showCards: true,
      recipiesData: [],
      favouriteData: [],
      imgPath: '',
      title: '',
      description: '',
      query: '',
    };
  }




  updateRender = (e) => {

    e.preventDefault();
    this.setState({
      showCards: false,

    });
    console.log('this is showCards', this.state.showCards);
  }

  componentDidMount=()=>{
    this.getRecipesData();
  }

  updateQuery = (e) => {
    e.preventDefault()
    this.setState({
      query: e.target.value
    })
  }

  getRecipesData = async () => {
console.log(this.state.query);
    const url = `http://localhost:3001/nute?app_key=483d48687c5cf962706b9e8f1fe9b82e&app_id=a9a6d2ec&q=${this.state.query}`

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

  addFavPost = async () => {
    console.log(this.state.selectedFavData)
    const { user } = this.props.auth0;
    const favDataBody = {
      email: user.email,
      img: this.state.selectedFavData.img,
      calories: this.state.selectedFavData.calories,
      label: this.state.selectedFavData.label,
      ingredients: this.state.selectedFavData.ingridients,
    };
    const url = `${process.env.REACT_APP_SERVER}/cheff`;
    const favData = await axios.post(url, favDataBody);
    console.log(favData)
    console.log(favDataBody)
    this.setState({
      favData: favData.data.myRecipes,
    });
  };
  addFav = async (data) => {
    console.log(data)
    await this.setState({
      selectedFavData: data,
    });
    this.addFavPost();
  };
  render() {
const {isAuthenticated}= this.props.auth0;
    // const { isAuthenticated } = this.props.auth0;
console.log(isAuthenticated);
    return (

      <>
      
        <BrowserRouter>
        <Router>
        <Header />
          <Switch>
<Route exact path="/">
<Home
          updateRender={this.updateRender}
          showCards={this.state.showCards}

        />
</Route>
            <Route exact path="/recipes">
              <Recipes foodData={this.state.recipiesData}
              addFav={this.addFav}
              /> 
                 <Search
          getRecipesData={this.getRecipesData}
          updateQuery={this.updateQuery}
           />
            </Route>

            <Route exact path="/blogs">
              <Blogs />

            </Route>

            <Route exact path="/profile">
            {(isAuthenticated )&&
              <Profile  favouriteData={this.state.favouriteData}/>
            }
            </Route>
            <Route exact path="/aboutus">
              <AboutUs/>

            </Route>
          

           
          </Switch>
          <Footer />
        </Router>
        </BrowserRouter>
        
      </>

    );
  }
}

export default withAuth0(App);
