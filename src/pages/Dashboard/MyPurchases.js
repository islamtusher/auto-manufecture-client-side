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
    const [id, setId] = useState('')

    // load current user puchased parts/items
    const { data: myPurchases, isLoading, refetch } = useQuery(['purchasesData', user], () =>
        fetch(`http://localhost:5000/myallpurchases?userEmail=${user?.email}`,{
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
        <div>
            <h1 className='text-secondary font-["Aclonica"] text-4xl font-light text-center mt-0 mb-6 '>My Purchase</h1>
            {
                !myPurchases.length > 0 ?
                    <h1 className='text-secondary text-center font-["Aclonica"] text-2xl font-light mt-5'>You Dont have any purchased yeat</h1>
                    :
                    <div className=" px-6 lg:px-20">
                        {
                            
                            myPurchases?.map((part, index) =>
                                <div key={part._id} class="overflow-x-auto w-full">
                                    <table class="table w-full">
                                        {/* <!-- head --> */}
                                        <thead>
                                            <tr>
                                                <th>Index</th>
                                                <th>Idintifier</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total Price</th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* <!-- row 1 --> */}
                                            <tr>
                                                <th>{index + 1}</th>
                                                <td>
                                                    <div class="flex items-center space-x-3">
                                                        <div class="avatar">
                                                            <div class="mask mask-squircle w-28 h-28">
                                                                <img src={part.itemInfo.itemImg} alt="Item Img" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div class="font-bold">{part.itemInfo.itemName}</div>
                                                            {/* <div class="text-sm opacity-50">United States</div> */}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className=''>
                                                    ${part.itemInfo.itemPrice}
                                                    <br />
                                                    <span class="badge badge-ghost badge-sm">Per Item</span>
                                                </td>
                                                <td>{part.quantity}</td>
                                                <td>${part.itemInfo.itemPrice * part.quantity}</td>
                                                <th>
                                                    <div class="items-center justify:start">                                                        
                                                        <label
                                                            htmlFor="deleting-modal"
                                                            onClick={()=>handleDeleteConfirm(part._id)}
                                                            // disabled={!service?.slots?.length > 0}
                                                            className="btn bg-primary border-primary rounded hover:border-primary hover:bg-white hover:text-primary">
                                                            Delete
                                                        </label> 
                                                    </div>
                                                </th>
                                                <th>
                                                    <div class="items-center justify:start">                                                        
                                                        <button onClick={()=>navigate(`/dashboard/payment/${part._id}`)} className="btn bg-primary border-primary rounded hover:border-primary hover:bg-white hover:text-primary">Payment</button> 
                                                    </div>
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                

                                // rmv--------------------------------------------------------------
                                // <div key={part.item_id} class="card card-compact flex-row shadow-md hover:-translate-y-3 hover:scale-105 hover:shadow-xl duration-700">
                                //     <figure><img className='w-[200px]' src={part.itemInfo.itemImg} alt="Shoes" /></figure>
                                //     <div class="card-body p-0">
                                //         <h2 class="card-title text-primary">{part.itemInfo.itemName}</h2>
                                //         <div className="text-stone-500 text-[17px]">
                                //             <p class="mb-1">Given Quantity: {part.quantity} pcs</p>
                                //         </div>
                                //         <div class="card-actions items-center justify:start">
                                //             <p class="text-lg font-bold	">Total Price: <span className='text-primary'>$</span>{part.itemInfo.itemPrice * part.quantity}</p>
                                //             <label
                                //                 htmlFor="deleting-modal"
                                //                 onClick={()=>handleDeleteConfirm(part._id)}
                                //                 // disabled={!service?.slots?.length > 0}
                                //                 className="btn bg-primary border-primary rounded hover:border-primary hover:bg-white hover:text-primary">
                                //                 Purchase Delete
                                //             </label> 
                                //         </div>
                                //     </div>
                                // </div>
                            )
                                
                        }
                    </div>
            }
            
            {modalToggle && <DeletingModal setModalToggle={setModalToggle} id={id} refetch={refetch}></DeletingModal>}
        </div>
    );
};

export default MyPurchases;