import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const {data: users, isLoading, refetch} = useQuery('users', () => fetch('https://sheltered-plateau-99075.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className=''>
        <h1 className='text-2xl font-medium mb-6'>All Users: {users.length}</h1>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Job</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <UserRow
                        key={user._id}
                        user={user}
                        index={index}
                        refetch={refetch}
                        ></UserRow>)
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default Users;