import React from "react"
import StripeCheckout from 'react-stripe-checkout'
import './stripe-button.styles.scss'

const StripeCheckoutButton = ({ price }) => {
    const priceforStripe = price * 100
    const publishableKey = 'pk_test_NRUvAyzzKg1vSL582j3fCoFD00MlGduBOV'

    const onToken = (token) =>{
        console.log(token)
    }
    return (
        <StripeCheckout
            className="stripe-btn"
            label="Pay now"
            name="IT Stuff"
            billingAddress
            shippingAddress
            image=''
            description={`Your total is $${price}`}
            amount={priceforStripe}
            panelLabel="Pay now"
            token={onToken}
            stripeKey={publishableKey}
        >

        </StripeCheckout>
    )
}

export default StripeCheckoutButton