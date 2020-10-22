import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_51HVyPFC2qdxZfsa4Y4i4g4Xh3gxO1dDpz9RtxNM3WolT8YW5AQPWGh87MKusyAgtRG8E6Deo0JcmOrFLlmCt9dj400NSHW4of2'

  // This should be the handler that will send the token to the
  // backend for actual charge.
  const onToken = token => {
    console.log(token)
    alert('Payment successful')
  }

  return (
    <StripeCheckout label="Pay Now"
                    name={`Clem's Clothing Ltd.`}
                    billingAddress
                    shippingAddress
                    image={'https://svgshare.com/i/CUz.svg'}
                    description={`Your total is $${price}`}
                    amount={priceForStripe}
                    panelLabel={'Pay Now'}
                    token={onToken}
                    stripeKey={publishableKey}/>
  )
}

export default StripeCheckoutButton
