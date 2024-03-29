import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckoutPage = ({ carItems, total }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>PRODUCT</span>
            </div>
            <div className="header-block">
                <span>DESCRIPTION</span>
            </div>
            <div className="header-block">
                <span>QUANTITY</span>
            </div>
            <div className="header-block">
                <span>PRICE</span>
            </div>
            <div className="header-block">
                <span>REMOVE</span>
            </div>
        </div>
        {carItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}

        <div className="total">
            <span>TOTAL: {total}$</span>
        </div>
        <div className="test-warning">
            *Please use the following test credit card for payments
            <br/>
            4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
        </div>
        <StripeCheckoutButton price={total} />
    </div>
);

const mapStateToProps = createStructuredSelector({
    carItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);
