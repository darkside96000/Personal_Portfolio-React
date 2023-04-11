import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/twitter.png";
import navIcon3 from "../assets/img/app_ic.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="@darkside96000" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/sonu-roy-4a8b98215"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://twitter.com/SonuRoy96000?t=ua1mJmfqvE-Vs8rsQpSFEg&s=08"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://instagram.com/darkside96000?igshid=ZDdkNTZiNTM="><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p> Copyright 2023:All Rights Reserved <b>@darkside96000</b></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
