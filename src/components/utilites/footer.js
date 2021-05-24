import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebook, FaGithub } from "react-icons/fa";

export class Footer extends Component {
  render() {
    return (
      <div>
        <Container
          fluid="true"
          style={{
            borderTop: "solid",
          }}
        >
          <Row
            style={{
              marginLeft: "5%",
            }}
          >
            <Col>
              <br></br>
              <h4>Help us create new recipes!</h4>
              <br></br>
              <a href="">Check our open positions</a>
              <br></br>
              <br></br>
              <h4>Social Links</h4>
              <br></br>
              <a>
                <FaGithub /> GitHub
              </a>
              <br></br>
              <a>
                <FaFacebook /> Facebook
              </a>
              <br></br>
            </Col>
            <Col>
              <br></br>
              <br></br>
              <a href="https://opensource.org/licenses/MIT">
                <p>
                  <h5>About License</h5>
                </p>
              </a>
              <br></br>
              <br></br>
              <a href="">
                <p>
                  <h5>Terms &amp; Conditions</h5>
                </p>
              </a>
              <br></br>
              <br></br>
              <a href="">
                <h5>Privacy Policy</h5>
              </a>
            </Col>
            <Col>
              <br></br>
              <h4>Quick Contact</h4>
              <br></br>
              <p>
                <h5>Phone:</h5>
              </p>
              <p>+962 77777777</p>
              <p>+962 78888888</p>
              <p>
                <h5>Email:</h5>
              </p>
              <p>support@tasty.org</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
