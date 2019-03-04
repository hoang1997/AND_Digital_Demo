/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react';
import { Button, Collapse, Card, Row, Col } from 'react-bootstrap';

export default class ProductDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        };
    }
    render() {
        return (
            <div>
                <Button className="collapseBtn" onClick={() => this.setState({ open: !this.state.open })}>
                    {this.state.open === false ? `+ ` : `- `}
                    {this.state.open === false ? `See ` : `Hide `} 
                    item details
                </Button>
                <br />
                <Collapse in={this.state.open}>
                    <Card>
                        <Card.Img variant="top" src="../Assets/vans.jpeg"/>
                        <Card.Body>
                            <p>Vans OldSchool Pros, Black/White, Size 9</p>
                            <Row className="show-grid">
                                <Col md={6}>
                                    <strong>{`£${this.props.price}`}</strong>
                                    <br />
                                    <strong className="price-strike">{`£${this.props.price}`}</strong>
                                </Col>
                                <Col md={6}>
                                    Qty: 1
                                </Col>
                            
                            </Row>
                        </Card.Body>
                    </Card>
                </Collapse>
            </div>
                )
        
            }
}