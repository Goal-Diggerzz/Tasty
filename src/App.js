import React, { Component } from 'react';
import Home from './components/homePage';
import Header from './components/header';
import Recipes from './components/recipes';
import Search from './components/Search';
import ModalApp from './components/modalApp';
import Footer from './components/footer';
import Blogs from './components/blogs';
import AboutUs from './components/AboutUs';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Profile from './components/Profile'
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
      recipiesData: [],
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
              <Profile />
            </Route>
            <Route exact path="/aboutus">
              <AboutUs/>
            </Route>
          </Switch>
          <ModalApp closeModal={this.closeModal} showModal={this.state.showModal} />
        </Router>
        <Footer />
      </>
    );
  }
}
export default App;