import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

export default class Name extends Component {
    render() {
        return (
            <div>
                <Row className="show-grid">
                    <Col><strong>First Name:</strong></Col>
                    <Col>Joseph</Col>
                </Row>
                <Row className="show-grid">
                    <Col md={6}><strong>Last Name</strong></Col>
                    <Col>Hoang</Col>
                </Row>
            </div>
        )
    }
}