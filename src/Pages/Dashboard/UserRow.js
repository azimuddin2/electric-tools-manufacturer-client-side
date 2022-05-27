import { faTrashCan, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin')
                }
              return  res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }
                console.log(data);
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-sm">Make Admin <FontAwesomeIcon className='ml-1' icon={faUserPlus}></FontAwesomeIcon></button>}</td>
            <td><button class="btn btn-sm btn-error text-white">Remove User <FontAwesomeIcon className='ml-1' icon={faTrashCan}></FontAwesomeIcon></button></td>
            {/* <td></td> */}
        </tr>
    );
};

export default UserRow;