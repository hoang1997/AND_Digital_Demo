import React, { Component }from 'react';
import { Col, Row, Form, Button, FormGroup} from 'react-bootstrap';

export default class DeliveryOptions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            deliveryPrice: ''
        }
    }
    

    render() {
        return (
            <div>
                <Row className="show-grid">
                    <Col md={6}>
                        <FormGroup controlId="formControlsSelect">
                        <Form.Control
                            as="select"
                            size="sm"
                            onChange={this.handleChange}
                           
                        
                        >
                            <option value="6">Standard Delivery: £6</option>
                            <option value="12">Next Day Delivery: £12</option>
                            <option value="0.00">Collection: £0.00</option>
                        </Form.Control>
                        <Button onClick={this.getSelectValue}>
                            Choose Delivery
                        </Button>
                        </FormGroup>
                    </Col>
                    
                </Row>
                

            </div>
            
           
        )
    }
}