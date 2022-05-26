import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({myPurchase}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentCardError,setPaymentCardError] = useState('')
    const [paymentCardSuccess,setPaymentCardSuccess] = useState('')
    const [clientSecret, setClientSecret] = useState("");

    const { _id, quantity, userEmail, userName } = myPurchase
    const { itemPrice } = myPurchase?.itemInfo
    const totalPrice = itemPrice * quantity

    console.log(myPurchase);
    
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
        // payment intent 
        const { paymentIntent, error: indentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: userEmail,
                        name: userName,
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
            const successedPayment = {
                clientSecret: paymentIntent.client_secret,
                id: paymentIntent.id,
                paymentMethod: paymentIntent.payment_method,
                status: paymentIntent.status,
            }
            fetch(`http://localhost:5000/mypurchase/${_id}`,{
                method: 'PATCH',
                headers: {
                    "Content-type": "application/json",
                    'Authorization' : `Bearer ${localStorage.getItem('accessToken')}` 
                },
                body: JSON.stringify(successedPayment)                    
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }
        
    }
    // console.log(paymentCardError);
    return (
        <form onSubmit={handleSubmit} className='mt-6 '>
            <label className='text-xl '>Get Paymet For Deal</label>
            <CardElement
                className='bg-gray-200 py-5 px-2 rounded'
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
            {paymentCardError && <p className='text-red-600 text-[20px] mt-2 mb-5'>{paymentCardError}</p>}
            {paymentCardSuccess && <p className='text-green-600 text-[20px] mt-2 mb-5'>{paymentCardSuccess}</p>}
            <button
                className='btn bg-primary px-10 border-0'
                type="submit"
                disabled={!stripe || !clientSecret}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;