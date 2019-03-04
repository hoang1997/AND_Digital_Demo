import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

export default class Address extends Component {
    render() {
        return (
            <div>
                <Row className="show-grid">
                    <Col><strong>Address 1:</strong></Col>   
                    <Col>Flat 39, Pavilions Accomodation</Col>    
                </Row> 
                <Row className="show-grid">
                    <Col md={6}><strong>Address 2:</strong></Col>
                    <Col>Ruston Way, Lincoln</Col>
                </Row>
                <Row className="show-grid">
                    <Col md={6}><strong>Country</strong></Col>
                    <Col>United Kingdom</Col>
                </Row>
                <Row className="show-grid">
                    <Col md={6}><strong>County</strong></Col>
                    <Col>Lincolnshire</Col>
                </Row>
                <Row className="show-grid">
                    <Col md={6}><strong>Postcode</strong></Col>
                    <Col>LN6 7DE</Col>
                </Row>
            </div>   
        )
    }
}