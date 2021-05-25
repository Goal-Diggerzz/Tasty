import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class RecipesPopUp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      allData: '',
    }
  }



  render() {



    return (
      <>


        {/* <Button variant="primary" onClick={() => setShow(true)}>
                    Custom Width Modal
      </Button> */}

        {/* <Modal
          show={this.props.show}
          onHide={this.props.closeFunc}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Custom Modal Styling
          </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
              commodi aspernatur enim, consectetur. Cumque deleniti temporibus
              ipsam atque a dolores quisquam quisquam adipisci possimus
              laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
              accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
              reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
              deleniti rem!
          </p>
          </Modal.Body>
        </Modal> */}



        {/* from here will start  */}

        {/* <ListGroup style={{ width: '15%', float: 'right' }}>
          <ListGroup.Item>No style</ListGroup.Item>
          <ListGroup.Item variant="primary">Primary</ListGroup.Item>
          <ListGroup.Item variant="secondary">Secondary</ListGroup.Item>
          <ListGroup.Item variant="success">Success</ListGroup.Item>
          <ListGroup.Item variant="danger">Danger</ListGroup.Item>
          <ListGroup.Item variant="warning">Warning</ListGroup.Item>
          <ListGroup.Item variant="info">Info</ListGroup.Item>
          <ListGroup.Item variant="light">Light</ListGroup.Item>
          <ListGroup.Item variant="dark">Dark</ListGroup.Item>
        </ListGroup>
        <div className='up'>


          <div className='myR'>

            <h1 style={{ color: 'white' }}> Hi from selected </h1>

          </div>

        </div>
        <h2 style={{
          marginTop: '60px', marginLeft: '40px'
        }}> Description</h2>
        <p className='selectedDesc'> London Chef puts a twist on mince pies with this giant, meringue-topped showstopping dessert. Prepare the pastry and filling ahead of time for an easy-to-make sweet that will impress your guests. London Chef puts a twist on mince pies with this giant, meringue-topped showstopping dessert. Prepare the pastry and filling ahead of time for an easy-to-make sweet that will impress your guests. London Chef puts a twist on mince pies with this giant, meringue-topped showstopping dessert. Prepare the pastry and filling ahead of time for an easy-to-make sweet that will impress your guests.
</p>
        <ul>
          {this.props.recipiesData.map(one => {
            return (
              <li>{one}</li>
            )
          })}
        </ul> */}

        <Container>
          <Row>
            <Col>
              <div className='up'>


                <div className='myR'>

                  <h1 style={{ color: 'white' }}> Hi from selected </h1>

                </div>

              </div>


            </Col>



            <Col>
              <ListGroup style={{ width: '30%', marginTop: '40px' }}>
                <ListGroup.Item>No style</ListGroup.Item>
                <ListGroup.Item variant="primary">
                  {this.props.myLabel}
                </ListGroup.Item>
                <ListGroup.Item variant="secondary">Secondary</ListGroup.Item>
                <ListGroup.Item variant="success">Success</ListGroup.Item>
                <ListGroup.Item variant="danger">Danger</ListGroup.Item>
                <ListGroup.Item variant="warning">Warning</ListGroup.Item>
                <ListGroup.Item variant="info">Info</ListGroup.Item>
                <ListGroup.Item variant="light">Light</ListGroup.Item>
                <ListGroup.Item variant="dark">Dark</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          {/* <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
          </Row> */}
        </Container>

        <h2 style={{
          marginTop: '60px', marginLeft: '40px'
        }}>
          Description
              </h2>
        <p className='selectedDesc'> London Chef puts a twist on mince pies with this giant, meringue-topped showstopping dessert. Prepare the pastry and filling ahead of time for an easy-to-make sweet that will impress your guests. London Chef puts a twist on mince pies with this giant, meringue-topped showstopping dessert. Prepare the pastry and filling ahead of time for an easy-to-make sweet that will impress your guests. London Chef puts a twist on mince pies with this giant, meringue-topped showstopping dessert. Prepare the pastry and filling ahead of time for an easy-to-make sweet that will impress your guests.
</p>

      </>




    );
  }
}

export default RecipesPopUp;