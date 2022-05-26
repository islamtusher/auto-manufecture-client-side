import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../../additional/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L37h2GHFZ6VXuVM1tL1ur7YMIdAF6BzYlmdbuhHl7mwQlW1r6dZueRxTERyM0K36ZwMpQ1rXWMqhrC7DruEbUp800rlNncaDJ');

const Payment = () => {
    const { id } = useParams()
    
    // load current user and purchased part/item Info
    const { data: myPurchase, isLoading, refetch } = useQuery(['purchasesData', id], () =>
        fetch(`http://localhost:5000/mypurchase/${id}`,{
            method: 'GET',
            headers: {
                'authorization' : `Bearer ${localStorage.getItem('accessToken')}` 
            }
        })
        .then(res => res.json())
    )
    if(isLoading ){
        return <Loading></Loading>
    }

    const {itemInfo,quantity} = myPurchase
    const {itemName, itemPrice, itemImg} = itemInfo
    
    return (
        <div>
            <h1 className='text-secondary font-["Aclonica"] text-4xl font-light text-center mt-0 mb-6'>Payment for Purchased</h1>
            <div className="flex flex-col lg:flex-row justify-evenly items-center px-6 lg:px-20">
                <div  class="card card-compact shadow-md hover:shadow-xl duration-700">
                    <figure><img className='w-[200px]' src={itemImg} alt="Shoes" /></figure>
                    <div class="card-body p-0">
                        <h2 class="card-title text-primary">{itemName}</h2>
                        <div className="text-stone-500 text-[17px]">
                            <p class="mb-1">Required Quantity: {quantity} pcs</p>
                            <p class="mb-1">Price: {itemPrice} per-pcs</p>
                        </div>
                        <div class="card-actions items-center justify:start">
                            <p class="text-lg font-bold	">Total Price: <span className='text-primary'>$</span>{itemPrice * quantity}</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <Elements stripe={stripePromise} >
                        <CheckoutForm myPurchase={myPurchase}/>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;