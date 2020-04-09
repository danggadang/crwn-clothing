import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
const StripeCheckoutButton = ({ price }) => {
    console.log(price);
    const priceForStripe = price * 100;
    const key = 'pk_test_Ym1dkoV3Q2zS2CO7DUmztXVn00yzhLW6W2';
    const onToken = (token) => {
        console.log("amount", priceForStripe);
        axios({
            url: "payment",
            method: "post",
            data: {
                amount: priceForStripe,
                token
            }
        }).then((response) => { alert("Payment success!!") })
            .catch((error) => { console.log("Payment error: ", error); alert("There's an issue with your payment!!"); });
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