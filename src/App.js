

import React, { Component } from 'react';
import Home from './components/view/homePage';
import Header from './components/utilites/header';
import Recipes from './components/view/recipes';
import Search from './components/Search';
import ModalApp from './components/modalApp';
// import Footer from './components/utilites/footer';
import Blogs from './components/view/blogs';
import AboutUs from './components/AboutUs';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Profile from './components/view/Profile'
import RecipesPopUp from './components/view/popUpRecipes'
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

      selectedFavData: '',
      // newFavSasasasasasasasa: [],

    };
  }




  updateRender = (e) => {

    e.preventDefault();
    this.setState({
      showCards: false,

    });
    console.log('this is showCards', this.state.showCards);
  }

  componentDidMount = () => {
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
    // console.log('the Express data', expressReq.data);
    localStorage.setItem('recipesFromApi', JSON.stringify(expressReq.data))
    this.setState({
      recipiesData: expressReq.data,
      showModal: true

    });
    console.log('the recipes', this.state.recipiesData);
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
    console.log('the fav data from maraim', this.state.selectedFavData)
    const { user } = this.props.auth0;
    const favDataBody = {
      email: user.email,
      label: this.state.selectedFavData.label,
      img: this.state.selectedFavData.img,
      calories: this.state.selectedFavData.calories,
      ingredients: this.state.selectedFavData.ingredients,
    };
    const url = `http://localhost:3001/cheff`;
    const favData = await axios.post(url, favDataBody);
    console.log(`Posting data`, this.state.favouriteData)
    console.log(favDataBody)
    this.setState({
      favouriteData: favData.data.myRecipes,
    });
  };






  addFav = async (data) => {
    console.log(data)
    await this.setState({
      selectedFavData: data,
    });

    this.addFavPost();
    // this.getMyRecipes();
  };
  render() {
    const { isAuthenticated } = this.props.auth0;
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
                  // getMyRecipes={this.getMyRecipes}
                />
                <Search
                  getRecipesData={this.getRecipesData}
                  updateQuery={this.updateQuery}
                />

              </Route>

                         <Route exact path="/blogs">
              { isAuthenticated&& <Blogs />}

              </Route>

              <Route exact path="/profile">
                {(isAuthenticated)&&
                <Profile favouriteData={this.state.favouriteData}
                  // newFavSasasasasasasasa={this.state.newFavSasasasasasasasa}
                  // getMyRecipes={this.getMyRecipes}
                   />}

              </Route>
              <Route exact path="/aboutus">
                <AboutUs />

              </Route>



            </Switch>

            {/* <Footer /> */}
          </Router>


        </BrowserRouter>

      </>

    );
  }
}

export default withAuth0(App);
