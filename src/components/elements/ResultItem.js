import React from "react";
import { Col, Row, Divider } from "antd";
import Tags from "../elements/Tags";
import { Images } from "../../assets/images/Image";
import "../../assets/scss/style.scss";

const ResultItem = () => {
  return (
    <a href="/detail">
      <div className="filtered-domain-list">
        <div>
          <Row>
            <Col span={23} offset={1}>
              <div className="domainRank">
                <div className="domain">
                  <div>
                    <img src={Images.adobe} alt="" />
                    <span>Adobe</span>
                  </div>
                  <div>
                    <a href="https://www.adobe.com/">https://www.adobe.com</a>
                  </div>
                </div>

                <div className="alexarank">
                  <div>
                    <img src={Images.Alexa} alt="" />
                  </div>
                  <div>
                    <div className="score">3.5</div>
                    <div>Local rating</div>
                  </div>
                  <div>
                    <div className="score">5.0</div>
                    <div>Global rating</div>
                  </div>
                </div>
              </div>
              <Divider />{" "}
              <div className="domain_description">
                <div>
                  <h2>Adobe: Creative, marketing and document management...</h2>
                  <p>
                    Adobe is changing the world through digital expreiences. We
                    help our customers create, deliver and optimize content and
                    applications.
                  </p>
                </div>
                <div>
                  <Tags />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </a>
  );
}

export default ResultItem;
