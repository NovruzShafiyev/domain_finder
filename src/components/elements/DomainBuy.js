import React from 'react';
import SearchingBox from '../elements/SearchBar';
import { Col, Row } from 'antd';
import '../../assets/scss/style.scss';
import Tags from '../elements/Tags';

const Domain = () => {
   return (
      <Row justify="center">
         <Col span={24}>
            <Row justify="center" className="domainsearch">
               <Col span={13} className="domain">
                  <div>
                     <h2>Use Domain Finder to find unique domains!</h2>
                     <p>
                        Millions of people are searching for companies, domains,
                        meta tags, company names and etc., on Domain finder. Try
                        today! <b>1 000 000</b> data for your search.
                     </p>
                  </div>

                  <div>
                     <SearchingBox />

                     <div className="result">
                        <div>
                           <h4>Adobe</h4>
                           <h4>Adobe Photoshop</h4>
                           <h4>Adobe Illustrator</h4>
                           <h4>Adobe XD</h4>
                        </div>
                        <div>
                           <a href={'https://google.com'}>
                              Show 599 finded domains
                           </a>
                        </div>
                     </div>
                  </div>

                  <div>
                     <b>Top searches:</b>
                     <Tags />
                  </div>
               </Col>
            </Row>
         </Col>
      </Row>
   );
}

export default Domain;
