import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const key = 'pk_test_Ym1dkoV3Q2zS2CO7DUmztXVn00yzhLW6W2';
    const onToken =(token)=>{
        console.log(token);
        alert("Payment success");
    }
    return (
        <StripeCheckout label="Pay Now"
            name="CEWN Cloting Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            discription={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={key}
        />
    )
}
export default StripeCheckoutButton;