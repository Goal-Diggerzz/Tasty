import React, { Component } from "react";
import { Form, Button, Container, Row, Col, Carousel } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: String,
      img: String,
      calories: Number,
      ingredients: [],
    };
  }

  componentDidMount = () => {
    this.addRecipe();
  };
  addRecipe = () => {};
  render() {
      let testNames= this.props.favouriteData;
    const { user, isAuthenticated } = this.props.auth0;
    console.log(testNames);
    return (
      <div>
        {isAuthenticated && (
          <>
            <img src={user.picture} />
            <h2>{user.name}</h2>

            <Container>
              <Row>
                <Col>
                  <h3>Favorite Recipes</h3>
                  <Carousel fade>
                  {testNames.map((data)=>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={data.img}
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        <h3>{data.name}</h3>
                        <p>
                          Nulla vitae elit libero, a pharetra augue mollis
                          interdum.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    )}
                  </Carousel>
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
<<<<<<< HEAD
=======
}


    componentDidMount = () => {
        this.addRecipe();
    }
    addRecipe = () => {

    }
    render() {
        return (
            <div>
                
                    <Form>
                        <Form.Group controlId="formBasicText">
                            <Form.Label>My Recipes</Form.Label>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>label</Form.Label>
                            <Form.Control  type="text" placeholder="" />      
                         </Form.Group>
                            </Form>      
            </div>
        )
    }
}

export default Profile
>>>>>>> e353c12dab30dbf354ef9bb8f693841a8224bc40

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
