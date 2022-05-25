import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({myPurchase}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentCardError,setPaymentCardError] = useState('')
    const [paymentCardSuccess,setPaymentCardSuccess] = useState('')
    const [clientSecret, setClientSecret] = useState("");

    const { itemPrice } = myPurchase?.itemInfo
    const totalPrice = itemPrice * myPurchase?.quantity
    
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                'Authorization' : `Bearer ${localStorage.getItem('accessToken')}` 
            },
            body: JSON.stringify({totalPrice}),
        })
            .then((res) => res.json())
            .then((data) => {
                setClientSecret(data.clientSecret)
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            })
        
    }, [totalPrice]);
    
    const appearance = {
        theme: 'stripe',
      };
      const options = {
        clientSecret,
        appearance,
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        error ? setPaymentCardError(error.message) : setPaymentCardError('')
        setPaymentCardSuccess('')
        
        const { paymentIntent, error: indentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: 'some thing'
                        // quantity: myPurchase?.quantity,
                        // totalPrice: totalPrice,
                    },
                },
            },
        );
        if (indentError) {
            setPaymentCardError(indentError.message)
            setPaymentCardSuccess('')
        } else {
            setPaymentCardError('')
            setPaymentCardSuccess('Payment Success')
            console.log(paymentIntent)
            
        }
        
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
            {paymentCardError && <p className='text-red-500'>{paymentCardError}</p>}
            {paymentCardSuccess && <p className='text-green-500'>{paymentCardSuccess}</p>}
            <button className='btn bg-primary' type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;