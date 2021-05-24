

import React, { Component } from 'react';
import Home from './components/homePage';
import Header from './components/header';
import Aboutus from './components/AboutUs';
export class App extends Component {
  render() {
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
              <AboutUs />
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
