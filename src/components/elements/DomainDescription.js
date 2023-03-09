import React from "react";
import { Col, Row } from "antd";
import { Images } from "../../assets/images/Image";
import "../../assets/scss/style.scss";

const DomainDescription = () => {
  return (
    <Row justify="center">
      <Col span={19}>
        <Row className="domain-description">
          <Col span={13} className="description">
            <div>
              <h2>
                Use Domain Finder to find <br /> unique domains!
              </h2>
              <span>
                Millions of people are searching for companies, domains, meta
                tags, company names and more on Domain Finder. Try it out today!{" "}
                <b>1,000,000</b> data points for your search.
              </span>
            </div>

            <div className="steps">
              <div>
                <span className="number">1</span>
                <span>Type to search</span>
              </div>
              <div>
                <span className="number">2</span>
                <span>Find domains</span>
              </div>
              <div>
                <span className="number">3</span>
                <span>Filter results</span>
              </div>
            </div>
          </Col>

          <Col className="picture" offset={2} span={8}>
            <img src={Images.girl} alt="Girl holding a laptop" />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default DomainDescription;
