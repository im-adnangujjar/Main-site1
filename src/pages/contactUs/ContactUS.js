import React from 'react'
import { Row,Col } from "react-bootstrap";
import"./ContactUS.css"
export default function ContactUS() {
    return (
        <div className='mainContainer1'>
         <container>
    <Row>
        <Col lg={6}> <h2>Lets Talks</h2>
        <div><img src="/assets/images/download (3).png"/>
        <h3>OUR Address</h3>
        <p>Faisalabad, Pakista
            Canal Road
        </p>
        </div>
        <div><img src="assets/images/download (4).png"/>
        <h3>Skype</h3>
           <p>info@techloset.com</p></div>
        <div> <img src="/assets/images/download (5).png"/></div>
        </Col>
        <Col lg={6}> just for demo</Col>
        </Row>
        </container>
    </div>
        
    )
}
