import React from 'react';
import './checkout.style.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selector';
import CartItem from '../../component/checkout-item/checkout-item.component';
import StripeButton from '../../component/stripe-button/stripe-button.component';
const CheckoutPage=({cartItems, cartTotal})=>(
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="checkout-block">
                <span>Product</span>
            </div>
            <div className="checkout-block">
                <span>Description</span>
            </div>
            <div className="checkout-block">
                <span>Quantity</span>
            </div>
            <div className="checkout-block">
                <span>Price</span>
            </div>
            <div className="checkout-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map((item)=>
                <CartItem key={item.id}  cartItem={item}/>
            )
        }
        <div className="total">
            TOTAL: ${cartTotal}
        </div>
        <div className="test-warning">
            *Please use the following test credit card for payments*
            <br/>
            4242 4242 4242 4242 - Exp:04/24 - CVV 123
        </div>
        <StripeButton price={cartTotal}/>
    </div>
)
const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    cartTotal:selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);