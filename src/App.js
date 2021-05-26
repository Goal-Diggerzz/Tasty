

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
import Test from './components/view/AboutTest'
import RecipesPopUp from './components/view/popUpRecipes'
import IsLoadingAndError from './components/utilites/loading'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  BrowserRouter
} from "react-router-dom";
import BlogDetail from './components/view/BlogDetail'

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
      sendedCatogire: '',
      blogdata: [],
      selectedFavData: '',
      // newFavSasasasasasasasa: [],

    };
  }

  getCardData = (e) => {
    console.log(e);
    this.setState({
      blogdata: e
    }, console.log(this.state.blogdata))
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
  // componentDidMount=()=>{
  //   !this.state.sendedCatogire==='' && this.getRecipesDataFromCat()
  // }

  getRecipesData = async () => {

    console.log(this.state.query);
    const url = `http://localhost:3001/nute?app_key=11a78e3dafaa34e54f4434581002f962&app_id=acb7a244&q=${this.state.query}`

    const expressReq = await axios.get(url);
    // console.log('the Express data', expressReq.data);
    localStorage.setItem('recipesFromApi', JSON.stringify(expressReq.data))
    this.setState({
      recipiesData: expressReq.data,
      showModal: true,

    });
    console.log('the recipes', this.state.recipiesData);

  }

  getRecipesDataFromCat = async () => {

    console.log(this.state.query);
    const url = `http://localhost:3001/nute?app_key=483d48687c5cf962706b9e8f1fe9b82e&app_id=a9a6d2ec&q=${this.state.sendedCatogire}`

    const expressReq = await axios.get(url);
    // console.log('the Express data', expressReq.data);
    // localStorage.setItem('recipesFromApi', JSON.stringify(expressReq.data))
    this.setState({
      recipiesData: expressReq.data,
      showModal: true,

    });
    console.log('the recipes', this.state.recipiesData);

  }
  


  burgerCatogrie = () => {
console.log(this.state.sendedCatogire);
this.setState({
  sendedCatogire:'burger',
},()=>this.getRecipesDataFromCat())
  }

  pizzaCatogrie = () => {
    console.log(this.state.sendedCatogire);
    this.setState({
      sendedCatogire:'pizza',
    },()=>this.getRecipesDataFromCat())
      }

      drinkCatogrie = () => {
        console.log(this.state.sendedCatogire);
        this.setState({
          sendedCatogire:'drink',
        },()=>this.getRecipesDataFromCat())
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

  };
  render() {
    const { isAuthenticated } = this.props.auth0;
    console.log(isAuthenticated);
    return (


      <BrowserRouter>


        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home
                updateRender={this.updateRender}
                showCards={this.state.showCards}
                burgerCatogrie={this.burgerCatogrie}
                pizzaCatogrie={this.pizzaCatogrie}
                drinkCatogrie={this.drinkCatogrie}
              />
            </Route>
            <Route path="/recipes"   >
              <Recipes foodData={this.state.recipiesData}
                addFav={this.addFav}
                getRecipesData={this.getRecipesData}
                // getMyRecipes={this.getMyRecipes}
                sendedCatogire={this.state.sendedCatogire}
              />    <Search
                getRecipesData={this.getRecipesData}
                updateQuery={this.updateQuery}
              />

            </Route>


            <Route exact path="/blogs">
              {isAuthenticated && <Blogs getCardData={this.getCardData} />}

            </Route>

            <Route exact path="/blog">
              {isAuthenticated && <BlogDetail blogdata={this.state.blogdata} />}

            </Route>

            <Route exact path="/profile">
              {(isAuthenticated) &&
                <Profile favouriteData={this.state.favouriteData}
                // newFavSasasasasasasasa={this.state.newFavSasasasasasasasa}
                // getMyRecipes={this.getMyRecipes}
                />}

            </Route>
            <Route exact path="/aboutus">
              <Test />

            </Route>
            
            <Route exact path="/blog">
              Hii
</Route>


          </Switch>

          {/* <Footer /> */}
        </Router>


      </BrowserRouter>



    );
  }
}

export default withRouter(withAuth0(App));
