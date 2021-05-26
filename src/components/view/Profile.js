import React, { Component } from "react";

import { Form, Button, Card, DropdownButton, Jumbotron, Container, Row, Col, Carousel } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import SelectFavorite from '../utilites/selectFavorite'
import '../../assets/profilestyle.css'
import HeaderPhoto from '../utilites/headerPhoto'


import Footer from "../utilites/footer";
// import Dropdown_myaccount from '../utilites/dropdown_myaccount'

// import bootstrap from 'bootstrap';


export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
      img: '',
      calories: 0,
      ingredients: [],
      newFavSasasasasasasasa: [],
      show: false,

      eventvalue: ''
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
      // console.log(`please give me Rec`, favRec.data);
      console.log(this.state.calories);
      this.setState({
        newFavSasasasasasasasa: favRec.data,
        // label: favRec.data.label,
        // img: favRec.data.img,
        // calories: favRec.data.calories,
        // ingredients: favRec.data.ingredients
        // showModal: true

      });
    }
    catch (error) {
      // console.log(`paaaalllleeeeeeeeez`, this.state.newFavSasasasasasasasa);
      console.log(error);
    }
  }
  viewFavorite = (event) => {
    event.preventDefault();
    this.setState({

      show: true,
      label: event.target.parentElement.parentElement.children[0].children[1].innerHTML,
      eventvalue: event.target.parentElement.parentElement.children[0].outerText,
      img: event.target.parentElement.parentElement.children[0].firstChild.currentSrc
      // calories: 'favRec.data.calories',
      // ingredients: 'favRec.data.ingredients'

    })
    { console.log('this is event', event); }
    { console.log('this is event', this.state.eventvalue); }
    { console.log('this is event', this.state.label); }
  }

  closing = () => {
    this.setState({
      show: false,
    })
  }


  render() {
    // let testNames= this.props.favouriteData;
    const { user, isAuthenticated } = this.props.auth0;
    // console.log(this.state.newFavSasasasasasasasa);

    return (
      <>
      <HeaderPhoto/>
      <div>
        {isAuthenticated && (
          <>

            <Jumbotron style={{ fontFamily: `'Josefin Sans', sans-serif`, color: 'rgb(20, 63, 83)', fontWeight: 'bolder' }}>
              <h1 >Your Delicious Recipies </h1>
              <p style={{ marginTop: '10px', marginLeft: '20px' }}>
                Added To Favorite Recipes
            </p>
              <h3 style={{ fontFamily: `'Josefin Sans', sans-serif`, color: 'rgb(20, 63, 83)', fontWeight: 'bolder', marginTop: '20px' }} >Favorite Recipes</h3>
            </Jumbotron>
            {/* <Dropdown_myaccount /> */}



            <Container>

              <Row md={3}>

                {this.state.newFavSasasasasasasasa.map((data, index) =>
                  <Col>

                    <>
                      <h3 style={{ fontFamily: `'Josefin Sans', sans-serif`, color: 'rgb(20, 63, 83)', fontWeight: 'bolder', marginTop: '20px' }} >{data.label}</h3>
                      <Card className='card1' onClick={this.viewFavorite} >
                        <Card.Body bsPrefix required='card-body' >
                          <Card.Img className='card-img-top1' variant="top" src={data.img} alt="First slide" />
                          <Card.Title className='card1-title'>{data.label}</Card.Title>
                          <Card.Text >
                            {data.ingredients}
                            {/* {data.ingredients} */}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      <Button onClick={() => this.props.deleteFav(index)} style={{ border: '2px solid red', color: 'red', backgroundColor: 'white', paddingLeft: '20px', paddingRight: '20px', marginLeft: '30px', fontWeight: 'bolder' }} > X</Button>

                    </>
                  </Col>
                )}

               
              </Row>
            </Container>
          </>
        )}

        <>
          {
            <SelectFavorite show={this.state.show} close={this.closing} url={this.state.img}
              ingredients={this.state.eventvalue} label={this.state.label} />
          }
        </>
        <Footer />
      </div>
      </>
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