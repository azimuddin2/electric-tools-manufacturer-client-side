import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({deletingProduct, refetch, setDeletingProduct}) => {
    const { _id ,name, description} = deletingProduct;

    const handleDelete = () => {
        fetch(`http://localhost:5000/tool/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`Tool ${name} is Deleted.`)
                    setDeletingProduct(null);
                    refetch()
                }
            })
    }

    return (
        <div>
            {/* <label for="delete-confirm-modal" className="btn modal-button">open modal</label> */}
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-red-500 text-lg">Are You Sure You Want to Delete ${name}</h3>
                    <p className="py-4">{description}</p>
                    <div className="modal-action">
                    <label onClick={() => handleDelete()} htmlFor="delete-confirm-modal" className="btn btn-error btn-sm text-white">Delete</label>
                        <label htmlFor="delete-confirm-modal" className="btn btn-sm">Cancel</label>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;