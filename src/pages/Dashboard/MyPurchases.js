import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../additional/FirebaseConfig';
import Loading from '../../additional/Loading';
import DeletingModal from './DeletingModal';

const MyPurchases = () => {
    const [user, loading] = useAuthState(auth) // current User
    const navigate = useNavigate()
    const [modalToggle, setModalToggle] = useState(false) // deleting modal toggler
    const [id, setId] = useState('') // deleting part id

    // load current user puchased parts/items
    const { data: myPurchases, isLoading, refetch } = useQuery(['purchasesData', user], () =>
        fetch(`https://calm-retreat-24478.herokuapp.com/myallpurchases?userEmail=${user?.email}`,{
            method: 'GET',
            headers: {
                'authorization' : `Bearer ${localStorage.getItem('accessToken')}` 
            }
        })
        .then(res => res.json())
    )
    if(isLoading || loading){
        return <Loading></Loading>
    }

    // Handle Delete Purchaed Item
    const handleDeleteConfirm = (id) => {
        setModalToggle(true)
        setId(id)    
    }
    return (
        <div className='min-h-screen w-full px-4 mx-auto lg:mt-20 mt-10 '>
            <h1 className='text-secondary font-["Aclonica"] text-4xl font-light text-center mt-0 mb-6'>My Purchase</h1>
            {
                !myPurchases.length > 0 ?
                    <h1 className='text-secondary text-center font-["Aclonica"] text-2xl font-light mt-5'>You Dont have any purchased yeat</h1>
                    :
                    <div className="">
                        <div class="overflow-x-auto w-full">
                            <table class="table w-full border-collapse border border-primary">
                                {/* <!-- head --> */}
                                <thead>
                                    <tr>
                                        <th className='border border-primary px-1'>Index</th>
                                        <th className='border border-primary'>Purchased Parts</th>
                                        <th className='border border-primary'>Price</th>
                                        <th className='border border-primary'>Quantity</th>
                                        <th className='border border-primary'>Total Price</th>
                                        <th colSpan="2" className='text-center border border-primary'>Manage Purchases</th>
                                    </tr>
                                </thead>

                                <tbody>
                            {
                                myPurchases?.map((part, index) =>
                                    <tr  key={part._id} >
                                        <th className="border border-primary">{index + 1}</th>
                                        <td className="border border-primary py-0">
                                            <div class="  space-x-3">
                                                <div class="avatar">
                                                    <div class="mask mask-squircle w-24 h-24">
                                                        <img src={part.itemInfo.itemImg} alt="Item Img" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="font-bold">{part.itemInfo.itemName}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='border border-primary'>
                                            ${part.itemInfo.itemPrice}
                                            <br />
                                            <span class="badge badge-ghost badge-sm">Per Item</span>
                                        </td>
                                        <td className="border border-primary text-center py-0">{part.quantity}</td>
                                        <td className="border border-primary text-center py-0">${part.itemInfo.itemPrice * part.quantity}</td>
                                        <th className="border border-primary">
                                        {
                                            !part.paid ?
                                                <div class="items-center justify:start">                                                        
                                                    <label
                                                        htmlFor="deleting-modal"
                                                        onClick={()=>handleDeleteConfirm(part._id)}
                                                        // disabled={!service?.slots?.length > 0}
                                                        className="btn bg-primary border-primary rounded hover:border-primary hover:bg-white hover:text-primary">
                                                        Cancel
                                                    </label> 
                                                </div>
                                                :
                                                <p className='text-green-600'>Purchased Done</p>

                                        }
                                        </th>
                                        <th className="border border-primary">
                                            <div class="items-center justify:start">                                                        
                                            {
                                                part.paid ? 
                                                    <>
                                                        <p className='text-green-600'>All-Ready Paid</p>
                                                        <p className='text-seccondary'>transationId:</p>
                                                        <p className='text-green-600'>{part.transationId}</p>
                                                    </>
                                                    :
                                                    <button
                                                        onClick={() => navigate(`/dashboard/payment/${part._id}`)}
                                                        className="btn bg-primary border-primary rounded hover:border-primary hover:bg-white hover:text-primary">
                                                        Payment
                                                    </button> 
                                            }
                                            </div>
                                        </th>
                                    </tr>
                                    )
                                        
                                }
                                </tbody>
                            </table>
                        </div>                                
                        
                    </div>
            }
            
            {modalToggle && <DeletingModal setModalToggle={setModalToggle} id={id} refetch={refetch}></DeletingModal>}
        </div>
    );
};

export default MyPurchases;