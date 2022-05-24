import React from 'react';
import { toast } from 'react-toastify';

const DeletingModal = ({ setModalToggle, id, refetch }) => {

    // Handle Delete Purchaed Item
    const handleDeleteItem = () => {
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
                    setModalToggle(false)
                    toast('Deleting Successfull')
                }
                console.log(data);
        })
    }
    return (
        <div>
            <input type="checkbox" id="deleting-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label for="deleting-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Are You Sure? Delete The Item?</h3>
                    <p className="py-4">If delete the item it will be delete permanently from database</p>
                    <div className="modal-action">
                        <button onClick={handleDeleteItem}>Delete</button>
                        <button onClick={()=>setModalToggle(false)} className='btn bg-primary'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeletingModal;