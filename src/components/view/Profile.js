import React, { Component } from "react";
import { Form, Button, Container, Row, Col, Carousel } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios'
export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: String,
      img: String,
      calories: Number,
      ingredients: [],
      newFavSasasasasasasasa: [],
    };
  }

  componentDidMount = () => {
    this.getMyRecipes();
  };
  getMyRecipes = async () => {
    try {
      const { user } = this.props.auth0;
      // const paramsObj = {
      //   email: user.email
      // }
      const url = `http://localhost:3001/cheff?email=${user.email}`
      const favRec = await axios.get(url);
      console.log(`please give me Rec`, favRec.data);
      this.setState({
        newFavSasasasasasasasa: favRec.data,
        // showModal: true

      });
      }
    catch (error) {
      console.log(`paaaalllleeeeeeeeez`, this.state.newFavSasasasasasasasa);
      console.log(error);
    }
  }
  render() {
    // let testNames= this.props.favouriteData;
    const { user, isAuthenticated } = this.props.auth0;
    console.log(this.state.newFavSasasasasasasasa);
    return (
      <div>
        {isAuthenticated && (
          <>
            <img src={user.picture} alt='' />
            <h2>{user.name}</h2>

            <Container>
              <Row>
                <Col>
                  <h3>Favorite Recipes</h3>
                    {this.state.newFavSasasasasasasasa.map((data) =>
                        <>
                        <img
                          className="d-block w-100"
                          src={data.img}
                          alt="First slide"
                        />
                          <h3>{data.label}</h3>
                          <p>
                            {data.ingredients}
                          </p>
                          </>
                    )}
                </Col>
                <Col>
                  <h3>My Blogs</h3>
                </Col>
              </Row>
            </Container>
          </>
        )}
      </div>
    );
  }
}

export default withAuth0(Profile);

// class YourClass extends React.Component{
//     constructor(props){
//         super(props);

//         this.onChangeHandler = this.onChangeHandler.bind(this);
//         this.saveToStorage = this.saveToStorage.bind(this);
//         this.recover = this.recover.bind(this);
//     }

//     componentDidMount(){
//         //check for localStorage every time component mounts. You can also do this conditionally.
//         this.recover();
//     }

//     recover(){
//         //parse the localstorage value
//         let data = JSON.parse(localStorage.getItem('history'));

//         this.setState({history: data.history});
//     }

//     onChangeHandler(e){
//         e.preventDefault();

//         this.setState({input: e.target.value});
//     }

//     saveToStorage(){
//         //local storage only takes in key value pair so you would have to serialize it.
//         let history = this.state.history ? this.state.history : {history: []};

//         history.history.push({text:this.state.input, link:'store linke here'});

//         localStorage.setItem('history', JSON.stringify(history));
//     }

//     render(){
//         return (
//             <div>
//                 <input onChange={this.onChangeHandler}/>
//                 <Button onClick={this.saveToStorage}>
//                     Save
//                 </Button>
//                 <div className="your-side-bar">
//                     {this.state.history ? this.state.history.map((item) => {
//                         return (
//                             //render as state changes
//                             <Link to={item.link}>{item.text}</Link>
//                         )
//                     }) : 'no history'}
//                 </div>
//             </div>
//         );
//     }
// }
