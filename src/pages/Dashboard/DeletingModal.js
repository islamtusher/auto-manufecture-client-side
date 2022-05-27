import React from 'react';
import { toast } from 'react-toastify';

const DeletingModal = ({ setModalToggle, id, refetch }) => {

    // Handle Delete Purchaed Item
    const handleDeleteItem = () => {
        fetch(`https://calm-retreat-24478.herokuapp.com/mypurchases?id=${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount === 1) {
                    refetch()
                    setModalToggle(false)
                    toast('Deleting Successfull')
                }
        })
    }
    return (
        <div>
            <input type="checkbox" id="deleting-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label for="deleting-modal" class="btn btn-sm btn-circle absolute bg-emerald-500 border-0 text-xl right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-primary">Are You Sure? Want to Delete The Item?</h3>
                    <p className="py-4">If delete the item it will be delete permanently from database</p>
                    <div className="modal-action">
                        <button onClick={handleDeleteItem}  className='btn bg-red-500 border-0'>Delete</button>
                        <button onClick={()=>setModalToggle(false)} className='btn bg-emerald-500 border-0'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeletingModal;