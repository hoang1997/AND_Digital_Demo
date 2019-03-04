import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { handleChange } from './actions/PromoCodeActions';
import SubTotal from './components/CartSummary/Subtotal/Subtotal'
import CollectionSavings from './components/CartSummary/CollectionSavings/CollectionSavings';
import TaxCost from './components/CartSummary/TaxCost/TaxCost';
import EstimatedTotal from './components/CartSummary/EstimatedTotal/EstimatedTotal';
import ProductDetails from './components/CartSummary/ProductDetails/ProductDetails';
import PromoCode from './components/CartSummary/PromoCode/PromoCode';

import Address from './components/Delivery/Address/Address';
import Name from './components/Delivery/Name/Name';
import DeliveryOptions from './components/Delivery/DeliveryOptions/DeliveryOptions';
import Navigation from './components/Generic/Navigation/Navigation';


import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      total: 100,
      pickupSavings: -3.67,
      taxes: 0,
      estimatedTotal: 0,
      disablePromoButton: false
    };
  }

  componentDidMount = () => {
    this.setState(
      { taxes: (this.state.total + this.state.pickupSavings) * 0.0875 },
      function () {
        this.setState({
          estimatedTotal:
            this.state.total + this.state.pickupSavings + this.state.taxes
        });
      }
    );
  };

  giveDiscountHandler = () => {
    if (this.props.promoCode === 'DISCOUNT') {
      this.setState({
        estimatedTotal: this.state.estimatedTotal * 0.9
      },
        function () {
          this.setState({
            disablePromoButton: true
        })
      }
      )
    }
  }

  render() {
    return (
      <div>
        <Navigation />
        
        <div className="container">
          <h1 className="h1-title">Summary</h1>
          <Row>
            <Col md={6}>
              <Container className="delivery-card">
                <h3>Delivery</h3>
                <hr />
                <Name/>
                <Address />
                <hr />
                <h4>Choose Option</h4>
                <DeliveryOptions/>
              </Container>
            </Col>
            <Col md={6}>
              <Container className="purchase-card">
                <h3>Cart</h3>
                <hr />
                <SubTotal price={this.state.total.toFixed(2)} />
                <CollectionSavings price={this.state.pickupSavings} />
                <TaxCost taxes={this.state.taxes.toFixed(2)} />
                <hr />
                <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
                <ProductDetails price={this.state.estimatedTotal.toFixed(2)} />
                <hr />
                <PromoCode
                  giveDiscount={() => this.giveDiscountHandler()}
                  isDisabled={this.state.disablePromoButton}
                
                />
              </Container>
            </Col>
                
          </Row>
        </div>
      </div>

    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

export default connect(mapStateToProps, { handleChange })(App);

