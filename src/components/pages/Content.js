import React from "react";
import Layout from "../layout/Layout";
import { Col, Row } from "antd";
import { Images } from "../../assets/images/Image";
import DomainDescription from "../elements/DomainDescription";
import "react-tabs/style/react-tabs.css";
import "../../assets/scss/style.scss";

const Content = () => {
  return (
    <Layout>
      <Row justify="center">
        <Col span={20}>
          <div className="about-section">
            <div
              style={{ marginTop: "-50px", textAlign: "-webkit-center" }}
            ></div>
            <div>
              <img src={Images.content} width="100%" />
            </div>
            <div>
              <h2>
                <b>About us</b>
              </h2>
              <p>
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum. <br />
                Why do we use it? <br />
                <br />
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span ={24}>
          <DomainDescription />
        </Col>
      </Row>
    </Layout>
  );
};

export default Content;
