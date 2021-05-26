import React, { Component } from "react";
import {Modal,Button} from 'react-bootstrap';

export class ModalApp extends Component {
  render() {
    return (
      <div>
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.props.showModal}
          onHide={this.props.closeModal}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Centered Modal</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ModalApp;

// export class ModalApp extends Component {

//   render() {
//     return (
//       <div>
//         <Modal.Dialog>
//           <Modal.Header closeButton>
//             <Modal.Title>Modal title</Modal.Title>
//           </Modal.Header>

//           <Modal.Body>
//             <p>Modal body text goes here.</p>
//           </Modal.Body>

//           <Modal.Footer>
//             <Button variant="secondary" onClick={()=>this.props.closeModal()}>Close</Button>
//             <Button variant="primary">Save changes</Button>
//           </Modal.Footer>
//         </Modal.Dialog>
//       </div>
//     );
//   }
// }

// export default ModalApp;
