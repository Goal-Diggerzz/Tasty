import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { withAuth0 } from "@auth0/auth0-react";



class SelectFavorite extends React.Component {




  render() {
    console.log(this.props.show, this.props.label, this.props.url, this.props.ingredients);
    return (
      <div>

        <Modal style={{ fontFamily: `'Josefin Sans', sans-serif`, color: 'rgb(20, 63, 83)', fontWeight: 'bolder', marginTop: '20px' }} show={this.props.show} onHide={this.props.close} >
          <Modal.Header closeButton>
            <Modal.Title style={{ fontFamily: `'Josefin Sans', sans-serif`, color: 'rgb(20, 63, 83)', fontWeight: 'bolder', marginTop: '20px' }} >{this.props.label}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} className="imgsize" src={this.props.url} alt={this.props.label} />
            <p style={{ fontFamily: `'Josefin Sans', sans-serif`, color: 'rgb(20, 63, 83)', fontWeight: 'bolder', marginTop: '20px' }} >{this.props.ingredients}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button style={{ backgroundColor: 'blue' }} onClick={this.props.close} variant="secondary" >
              Close
                         </Button>

          </Modal.Footer>
        </Modal>
      </div>

    )
  }
}

export default withAuth0(SelectFavorite);