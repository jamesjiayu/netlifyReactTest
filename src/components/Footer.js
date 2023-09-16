import React from "react"
import { Container, Row, Col } from "react-bootstrap"
// import { FaLinkedinIn } from "react-icons/fa"
  // import {
  //   AiFillGithub,
  //   AiOutlineTwitter,
  //   AiFillInstagram,
  // } from "react-icons/ai"
function Footer () {
  let date = new Date()
  let year = date.getFullYear()
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Jimmy Huang</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} JH</h3>
        </Col>
        <Col md="4" className="footer-body">
          {/* <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="#"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="#"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="#"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="#"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul> */}
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
