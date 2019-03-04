import React, { Component } from 'react';
import { Button, Collapse, Card, Form, FormGroup, FormControl, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { handleChange } from '../../../actions/PromoCodeActions'


class PromoCode extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
        };
    }
    handleChange = e => {
        this.props.handleChange(e);
    }
    
    render() {
        return (
            <div>
                <Button className="promoCodeButton collapseBtn" onClick={() => this.setState({open: !this.state.open})}>
                    {this.state.open === false ? '+ ' : '- '}
                    {this.state.open === false ? `Apply ` : `Hide `}
                    Discount Code
                  
                </Button>
                <Collapse in={this.state.open}>
                    <Card>
                        <Card.Body>
                            <Row className="show-grid">
                                <Col md={12}>
                                    <Form>
                                        <FormGroup controlId="formInlineName">
                                            <Form.Label>Discount Code</Form.Label>
                                            <FormControl
                                                type="text"
                                                placeholder="Please enter Discount Code"
                                                value={this.props.promoCode}
                                                onChange={this.handleChange}
                                            />
                                        </FormGroup>
                                        <Button
                                            block
                                            className="btn-round"
                                            disabled={this.props.isDisabled}
                                            onClick = {this.props.giveDiscount}
                                        >
                                            Apply Discount
                                        </Button>
                                    </Form>    

                                </Col>    
                            </Row>    
                        </Card.Body>   
                    </Card>
                </Collapse>    
            </div>
        )
    }
}

const mapStateToProps = state => ({
    promoCode: state.promoCode.value
})

export default connect(mapStateToProps, {handleChange})(PromoCode);