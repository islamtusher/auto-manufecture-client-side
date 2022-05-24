import React from 'react';

const DeletingModal = ({ setModalToggle }) => {
    console.log(setModalToggle);
    return (
        <div>
            <label htmlFor="deleting-modal" className="btn modal-button">open modal</label>

            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="deleting-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label for="deleting-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Congratulations random Interner user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label htmlFor="deleting-modal" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeletingModal;