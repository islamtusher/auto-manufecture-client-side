import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({myPurchase}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentCardError,setPaymentCardError] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const { itemPrice } = myPurchase?.itemInfo
    const totalPrice = itemPrice * myPurchase?.quantity
    // console.log(itemPrice);
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({totalPrice}),
        })
            .then((res) => res.json())
            .then((data) => {
                setClientSecret(data.clientSecret)
                console.log(data);
          });
    }, [totalPrice]);
    
    // const appearance = {
    //     theme: 'stripe',
    //   };
    //   const options = {
    //     clientSecret,
    //     appearance,
    //   };

    const handleSubmit = async(event) => {
        event.preventDefault();

        if (!stripe || !elements) {
          // Stripe.js has not loaded yet. Make sure to disable
          // form submission until Stripe.js has loaded.
          return;
        }
    
        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);
    
        if (card == null) {
          return;
        }

        // Use your card Element with other Stripe.js APIs
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        error ? setPaymentCardError(error.message) : setPaymentCardError('')
        // if (error) {
        //     console.log('[error]', error);
        // } else {
        //     console.log('[PaymentMethod]', paymentMethod);
        // }
    }
    console.log(paymentCardError);
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                style: {
                    base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                        color: '#aab7c4',
                    },
                    },
                    invalid: {
                    color: '#9e2146',
                    },
                },
                }}
            />
            <button className='btn bg-primary' type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;