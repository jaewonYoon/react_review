import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishablekey = "pk_test_Hu2gNODFZuyEYmiCW1tiubxg00MjCOuowg";
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    return (
        <StripeCheckout
            label='Pay you'
            name='CRWN clothing'
            bilingAddress
            shippingAddress
            image = 'https://svgshare.com/i/CUz.svg'
            description = {`Your total is $${price}`}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishablekey}
        />
    )
}

export default StripeCheckoutButton;