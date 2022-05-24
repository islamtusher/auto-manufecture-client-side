import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../additional/FirebaseConfig';
import Loading from '../../additional/Loading';
import DeletingModal from './DeletingModal';

const MyPurchases = () => {
    const [user, loading] = useAuthState(auth) // current User
    const [modalToggle, setModalToggle] = useState(false) // deleting modal toggler

    // load current user puchased parts/items
    const { data: myPurchase, isLoading, refetch } = useQuery(['purchasesData', user], () =>
        fetch(`http://localhost:5000/mypurchases?userEmail=${user?.email}`)
        .then(res => res.json())
    )
    if(isLoading || loading){
        return <Loading></Loading>
    }

    // Handle Delete Purchaed Item
    const handleDeleteItem = (id) => {
        setModalToggle(true)
        fetch(`http://localhost:5000/mypurchases?id=${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount === 1) {
                    refetch()
                    toast('Deleting Successfull')
                }
                console.log(data);
        })
    
    }
    return (
        <div>
            <h1 className='text-secondary font-["Aclonica"] text-4xl font-light text-center mt-0 mb-6 '>My Purchase</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-y-16 px-6 lg:px-20">
                {
                    myPurchase?.map( part =>
                        <div key={part.item_id} class="card card-compact flex-row shadow-md hover:-translate-y-3 hover:scale-105 hover:shadow-xl duration-700">
                            <figure><img className='w-[200px]' src={part.itemInfo.itemImg} alt="Shoes" /></figure>
                            <div class="card-body p-0">
                                <h2 class="card-title text-primary">{part.itemInfo.itemName}</h2>
                                <div className="text-stone-500 text-[17px]">
                                    <p class="mb-1">Given Quantity: {part.quantity} pcs</p>
                                </div>
                                <div class="card-actions items-center justify:start">
                                    <p class="text-lg font-bold	">Total Price: <span className='text-primary'>$</span>{part.itemInfo.itemPrice * part.quantity}</p>
                                    <label
                                        htmlFor="deleting-modal"
                                        onClick={()=>handleDeleteItem(part._id)}
                                        // disabled={!service?.slots?.length > 0}
                                        className="btn bg-primary border-primary rounded hover:border-primary hover:bg-white hover:text-primary">
                                        Purchase Cencle
                                    </label> 
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            {modalToggle && <DeletingModal setModalToggle={setModalToggle}></DeletingModal>}
        </div>
    );
};

export default MyPurchases;