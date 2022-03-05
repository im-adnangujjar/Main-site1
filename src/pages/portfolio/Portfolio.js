import React from 'react'
import"./Portfolio.css"
import {Row,Col} from "react-bootstrap";
export default function Portfolio() {
    return (
        <div className="mainContainer2">
            <div style="margin-top:100px">
             <Row>
            <Col lg={6}>
                <h6 className="h">PortFolio</h6>
                <p className="p">During the 5-years of work experience in the field made us work with some of the best business ideas.
                    Some of our portfolio projects are showcased below.We provide tailor made services and can convert
                    your designs or even imaginations into viable solutions.</p>
                    <button className='button'>LOAD MORE</button>
            </Col>
            <Col lg={6}>
                <img src="/assets/images/Home.27a00145.png"className='images'/>
            </Col>
         </Row>
         </div>
        </div>
    )
}
