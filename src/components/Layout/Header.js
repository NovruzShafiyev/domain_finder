import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "../../assets/scss/style.scss"

const Header = () => {
   return (
      <Row justify="center">
         <Col span={19}>
            <Row className="header">
               <Col span={12} className="header-logo">
                  <Link to="/">DomainFinder</Link>
               </Col>

               <Col span={12} className="header-signin">
                  <Link to="/content">About us</Link>
                  <Link to="#">For Developers</Link>
               </Col>
            </Row>
         </Col>
      </Row>
   );
}

export default Header;