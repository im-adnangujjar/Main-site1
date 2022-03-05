import React from 'react'
import './Services.css' 
import { Row,Col} from " react-bootstrap";
export default function Services() {
    return (
        <div>
            <Row>
        <div  style="margin-top: 60px;">
        <Col lg={6}>
          <h3 className="heading">SERVICES</h3>
          <p className="p"> 
            TechloSet Solutions offers IT Based solutions for small business to
            large enterprises. Our services vary from Web Application
            Development, Mobile Application Development to SaaS based cloud
            applications.
          </p>
          <div><button className="button">LOAD MORE</button></div>
          </Col>
      
        <Col lg={6}>
          <img src="/assets/images/Services.c43a6ac6.png" width="500" px />
        </Col>
        </div>
        </Row>


      <Row>
        <Col lg={12}>
          <h1>WHAT SERVICESARE YOU LOOKING FOR</h1>
          <p>
            TechloSet Solutions offers IT Based solutions for small business to
            large enterprises. Our services vary from Web Application
            Development, Mobile Application Development to SaaS based cloud
            applications.We work with the latest state-of-the-art technologies
            and build highly efficient solutions to automate daily life
            processes.
          </p>
        </Col>
      </Row>
        </div>
    )
}
