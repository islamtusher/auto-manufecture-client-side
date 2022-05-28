import { paste } from '@testing-library/user-event/dist/paste';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../../additional/Loading';

const ManageAllOrders = () => {
    const navigate = useNavigate()

    // Load the Profile info
    const { data : allOrders, isLoading, refetch } = useQuery('ordersData', () => 
        fetch(`http://localhost:5000/allOrders`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
            }}
        )
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    const handleUpdateStatus = (id) => {
        // Load the Profile info
        fetch(`http://localhost:5000/order/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
                'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
            }}
        )
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === 'true') {
                    refetch()
                    toast('Product shipped')
                } else {
                    toast('somthing wrong')
                }
            })
    }

    const handleDeleteOder = (id) => {
        fetch(`http://localhost:5000/order/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
            }}
        )
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount >0) {
                    refetch()
                    toast('Order Delete')
                } else {
                    toast('somthing wrong')
                }
                console.log(data);
            })
    }
    return (
        <div>
            <h1>Manage All Orders:{allOrders?.length}</h1>
            <div className=" px-6 lg:px-20">
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
                                allOrders?.map((part, index) =>
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
                                        {/* <th className="border border-primary">
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
                                        </th> */}
                                        <th className="border border-primary">
                                            <div class="items-center justify:start">                                                        
                                            {
                                                    !part.paid ?
                                                        <p className='text-green-600'>UnPaid</p>
                                                        :
                                                        <p className='text-green-600'>Paid</p>

                                            }
                                            </div>
                                        </th>
                                        <th className="border border-primary">
                                            <div class="items-center justify:start">                                                        
                                            {
                                                (part.status === 'pending'  && 
                                                        <p className='text-red-600'>Pending</p>)
                                                    ||
                                                (part.status === 'shipped' &&
                                                        <p className='text-green-600'>Shipped</p>)
                                                    
                                            }
                                            </div>
                                        </th>
                                        <th className="border border-primary">
                                            <div class="items-center justify:start">                                                        
                                            {
                                                (!part.paid &&
                                                    <>
                                                        <button
                                                            onClick={() => handleDeleteOder(part._id)}
                                                            className="btn bg-primary border-primary rounded hover:border-primary hover:bg-white hover:text-primary">
                                                            Delete
                                                        </button> 
                                                    </>)
                                                    ||
                                                (part.paid && part.status === 'pending' &&
                                                    <button
                                                        onClick={() => handleUpdateStatus(part._id)}
                                                        className="btn bg-primary border-primary rounded hover:border-primary hover:bg-white hover:text-primary">
                                                        Shipped That
                                                        </button>) 
                                                    ||
                                                (part.paid && part.status === 'shipped' &&
                                                    <></>)
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
        </div>
    );
};

export default ManageAllOrders;