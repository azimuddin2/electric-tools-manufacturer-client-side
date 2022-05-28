import React from 'react';
import { toast } from 'react-toastify';

const ProductRow = ({ tool, index, refetch }) => {
    const { _id, name, img, description, price, minimumQuantity, availableQuantity } = tool;

    const handleDelete = id => {
        fetch(`http://localhost:5000/tool/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`Tool ${name} is Deleted.`)
                    refetch()
                }
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-20 bg-gray-400 rounded-sm">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>${price}</td>
            {/* <td>{description}</td> */}
            <td>
                <label onClick={() => handleDelete(_id)} for="delete-confirm-modal" className="btn btn-error btn-sm text-white">Delete</label>
            </td>
        </tr>
    );
};

export default ProductRow;