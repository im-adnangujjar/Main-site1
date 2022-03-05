import React from 'react'
import {Row,Col} from "react-bootstrap";
import  './About.css'

export default function About() {
    return (
        <div  class="main-div">
        <Row>
          <Col lg={6}>
            <h1  class="heading">ABOUT</h1>
            <p class="p">
              TechloSet is the portmanteau of Tech and Closet. As the name
              suggests, it contains all technologies and we keep on updating it
              with the latest ones, like any other closet. Innovation is an
              essential feature of digital information technology, and we aim to
              give every innovative idea a new life by digitally transforming
              it. TechloSet Solutions understands the importance of remaining
              up-to-date through frequent self-reinvention. We have work
              experience of over - 5 years and during this period the revolution
              process is continuously evolving. Our vision is to build a digital
              globe around us and our mission is to work day and night to
              achieve it. We accomplish our goals by continuously interacting
              with the brightest minds in modern digital paradigms and
              platforms. TechloSet distinguishes itself by offering
              organizations a single touchpoint to address every need of an
              enterprise's digital solution.
            </p>
            <button class="button">LOAD MORE</button>
    </Col>
     <Col>
     <img src="\assets\images\Working.0ddd8147.png"className="image1" />
     </Col>
     </Row>
             
    

      <container>
       <Row> 
          <Col lg={5}>
           <h6>COPYRIGHT © 2021 TECHLOSET. ALL RIGHTS RESERVED.</h6></Col>
          <Col lg={3}> just for demo</Col>
          <Col lg={4}></Col>
        </Row>
        </container>
      
        </div>
    )
}
