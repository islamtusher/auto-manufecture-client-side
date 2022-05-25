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
    
    // load current user puchased part/item
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
    const {itemInfo,quantity, userName} = myPurchase
    const {itemName, itemPrice, itemImg, minimumQuantity, availableParts} = itemInfo
    
    return (
        <div>
            <h1>My Purchased Payment</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 px-6 lg:px-20">
                <div  class="card card-compact shadow-md hover:-translate-y-3 hover:scale-100 hover:shadow-xl duration-700">
                    <figure><img className='w-[200px]' src={itemImg} alt="Shoes" /></figure>
                    <div class="card-body p-0">
                        <h2 class="card-title text-primary">{itemName}</h2>
                        <div className="text-stone-500 text-[17px]">
                            <p class="mb-1">Given Quantity: {quantity} pcs</p>
                        </div>
                        <div class="card-actions items-center justify:start">
                            <p class="text-lg font-bold	">Total Price: <span className='text-primary'>$</span>{itemPrice * quantity}</p>
                            <label
                                htmlFor="deleting-modal"
                                // onClick={()=>handleDeleteConfirm(part._id)}
                                // disabled={!service?.slots?.length > 0}
                                className="btn bg-primary border-primary rounded hover:border-primary hover:bg-white hover:text-primary">
                                Purchase Delete
                            </label> 
                        </div>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm myPurchase={myPurchase}/>
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;