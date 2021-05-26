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
            borderTop: "solid", marginTop: '30px', fontFamily: `'Josefin Sans', sans-serif`, color: 'rgb(20, 63, 83)'
          }}
        >
          <Row
            style={{
              marginLeft: "5%",
            }}
          >
            <Col style={{ fontFamily: `'Josefin Sans', sans-serif` }}>
              <br></br>
              <h4 style={{ fontFamily: `'Josefin Sans', sans-serif` }}>Help us create new recipes!</h4>
              <br></br>
              <a style={{ fontFamily: `'Josefin Sans', sans-serif` }} href="">Check our open positions</a>
              <br></br>
              <br></br>
              <h4 style={{ fontFamily: `'Josefin Sans', sans-serif` }}>Social Links</h4>
              <br></br>
              <a style={{ fontFamily: `'Josefin Sans', sans-serif` }}>
                <FaGithub /> GitHub
              </a>
              <br></br>
              <a style={{ fontFamily: `'Josefin Sans', sans-serif` }}>
                <FaFacebook /> Facebook
              </a>
              <br></br>
            </Col>
            <Col>
              <br></br>
              <br></br>
              <a href="https://opensource.org/licenses/MIT">
                <p>
                  <h5 style={{ fontFamily: `'Josefin Sans', sans-serif` }}>About License</h5>
                </p>
              </a>
              <br></br>
              <br></br>
              <a href="">
                <p>
                  <h5 style={{ fontFamily: `'Josefin Sans', sans-serif` }}>Terms &amp; Conditions</h5>
                </p>
              </a>
              <br></br>
              <br></br>
              <a href="">
                <h5 style={{ fontFamily: `'Josefin Sans', sans-serif` }}>Privacy Policy</h5>
              </a>
            </Col>
            <Col>
              <br></br>
              <h4 style={{ fontFamily: `'Josefin Sans', sans-serif` }}>Quick Contact</h4>
              <br></br>
              <p>
                <h5 style={{ fontFamily: `'Josefin Sans', sans-serif` }}>Phone:</h5>
              </p>
              <p>+962 77777777</p>
              <p>+962 78888888</p>
              <p>
                <h5 style={{ fontFamily: `'Josefin Sans', sans-serif` }}>Email:</h5>
              </p>
              <p style={{ fontFamily: `'Josefin Sans', sans-serif` }}>support@tasty.org</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
