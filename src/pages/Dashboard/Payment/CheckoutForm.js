import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import api from '../../../network/network';
import { toast } from 'react-toastify';

const CheckoutForm = ({myPurchase}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentCardError,setPaymentCardError] = useState('')
    const [paymentCardSuccess,setPaymentCardSuccess] = useState('')
    const [clientSecret, setClientSecret] = useState("");

    const { _id, quantity, userEmail, userName } = myPurchase
    const { itemPrice } = myPurchase?.itemInfo
    const totalPrice = itemPrice * quantity

    // console.log(myPurchase);
    
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch(`${api}/create-payment-intent`, {
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
            })
            .catch(err => { 
                toast.error('Something went wrong')
                console.log(err)
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
            console.log({ paymentIntent: paymentIntent })

            // successedPayment Info for store on db
            const successedPayment = {
                clientSecret: paymentIntent.client_secret,
                transationId: paymentIntent.id,
                paymentMethod: paymentIntent.payment_method,
                status: 'pending',
            }
            // store the successedPayment info on db
            fetch(`${api}/mypurchase/${_id}`, {
              method: "PATCH",
              headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              body: JSON.stringify(successedPayment),
            })
              .then((res) => res.json())
              .then((data) => {
                  console.log(data);
                  toast.success('Payment sent successfully')
              })
              .catch((err) => {
                toast.error("Something went wrong");
                console.log(err);
              });
        }
        
    }
    // console.log(paymentCardError);
    return (
        <form onSubmit={handleSubmit} className='mt-6 w-[320px] mx-auto'>
            <label className='text-xl'>Let's Payment For Deal</label>
            <CardElement
                className='bg-gray-200 py-5 px-2 my-2 rounded'
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
            {paymentCardError && <p className='text-red-600 text-[20px] '>{paymentCardError}</p>}
            {paymentCardSuccess && <p className='text-green-600 text-[20px] '>{paymentCardSuccess}</p>}
            <button
                className='btn bg-primary w-full mt-5 border-0'
                type="submit"
                disabled={!stripe || !clientSecret}>
                Payment Confirm
            </button>
        </form>
    );
};

export default CheckoutForm;