import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const OrderForm = ({ tool }) => {
    const { _id, name, price } = tool;
    const [user, loading] = useAuthState(auth);
    const [check, setCheck] = useState(0);
    console.log(check)

    const handleOrder = event => {
        event.preventDefault();
        const order = {
            toolId: _id,
            toolName: name,
            toolPrice: price,
            customerName: user.displayName,
            customerEmail: user.email,
            customerPhone: event.target.phone.value,
            customerAddress: event.target.address.value,
            orderQuantity: event.target.quantity.value,
        }
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('Order Complete')
                }
            })
    }

    return (
        <div className='flex my-12 justify-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-medium text-2xl">Please Order</h2>
                    <form onSubmit={handleOrder}>
                        <div className="form-control w-full max-w-xs">
                            <input type="text" name='name'
                                disabled value={user?.displayName || ''}
                                className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <input type="email" name='email'
                                disabled value={user?.email || ''}
                                className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <input type="text" name='address' placeholder="Address"
                                className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <input type="text" name='phone' placeholder="Phone Number"
                                className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <input type="text" name='tool' value={name} disabled
                                className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <input type='text' name='price' value={price}
                                className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <input onChange={(event) => setCheck(event.target.value)}
                                type="number" name='quantity'
                                placeholder='Order Quantity'
                                className="input input-bordered w-full max-w-xs"
                            />
                            {
                                check < tool?.minimumQuantity && <span className="label-text-alt text-red-500">Minimum Quantity{tool.minimumQuantity}</span>
                            }

                            {
                                check > tool?.availableQuantity && <span className="label-text-alt text-red-500">Available Quantity{tool.availableQuantity}</span>

                            }
                        </div>

                        <input
                            disabled={check < tool?.minimumQuantity || check > tool?.availableQuantity}
                            className='btn btn-secondary text-white w-full max-w-xs' type="submit" value='Order' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderForm;