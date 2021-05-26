import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { withAuth0 } from "@auth0/auth0-react";



class SelectFavorite extends React.Component {




        render() {
            console.log(this.props.show,this.props.label,this.props.url,this.props.ingredients );
        return (
            <div>

                <Modal show={this.props.show} onHide={this.props.close} >
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.label}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img className="imgsize" src={this.props.url} alt={this.props.label} />
                        <p>{this.props.ingredients}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.close} variant="secondary" >
                            Close
                         </Button>

                    </Modal.Footer>
                </Modal>
            </div>

        )
    }
}

export default withAuth0(SelectFavorite);