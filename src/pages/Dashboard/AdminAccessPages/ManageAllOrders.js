import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../../additional/Loading';
import api from '../../../network/network';

const ManageAllOrders = () => {
    // Load the Profile info
    const { data : allOrders, isLoading, refetch } = useQuery('ordersData', () => 
        fetch(`${api}/allOrders`, {
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
        fetch(`${api}/order/${id}`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged === "true") {
              refetch();
              toast.success("Product shipped");
            } else {
              toast.error("something want's wrong");
            }
          })
          .catch((err) => {
            toast.error("Something want Wrong");
            console.log(err);
          });
    }

    const handleDeleteOder = (id) => {
        fetch(`${api}/order/${id}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              toast.success("Order Delete");
            } else {
              toast.warning("something want wrong");
            }
          })
          .catch((err) => {
            toast.error("Something want Wrong");
            console.log(err);
          });
    }
    return (
        <div className="min-h-screen w-full px-4 mx-auto lg:pt-20 ">
            <h1 className='text-secondary font-["Aclonica"] text-4xl font-light text-center mt-0 mb-6'>Manage All Orders: {allOrders?.length}</h1>
            <div className="overflow-x-auto ">
                <table className="table w-full border-collapse border border-primary">
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
                                <div className="  space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-24 h-24">
                                            <img src={part.itemInfo.itemImg} alt="Item Img" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{part.itemInfo.itemName}</div>
                                    </div>
                                </div>
                            </td>
                            <td className='border border-primary'>
                                ${part.itemInfo.itemPrice}
                                <br />
                                <span className="badge badge-ghost badge-sm">Per Item</span>
                            </td>
                            <td className="border border-primary text-center py-0">{part.quantity}</td>
                            <td className="border border-primary text-center py-0">${part.itemInfo.itemPrice * part.quantity}</td>                          
                            <th className="border border-primary">
                                <div className="items-center justify:start">                                                        
                                {
                                        !part.paid ?
                                            <p className='text-green-600'>UnPaid</p>
                                            :
                                            <p className='text-green-600'>Paid</p>

                                }
                                </div>
                            </th>
                            <th className="border border-primary">
                                <div className="items-center justify:start">                                                        
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
                                <div className="items-center justify:start">                                                        
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
    );
};

export default ManageAllOrders;