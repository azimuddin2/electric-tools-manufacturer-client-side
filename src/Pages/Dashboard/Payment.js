import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L4Ee2Khzx4vSZGf9yymEzj3VhgmExoJUOsKc0miytgda7NqErafbQVN9XiuweCSjpJIgTrZz1EV29z1gNU4d5f700Si3GtgAF');

const Payment = () => {
    const {id} = useParams();
    const url = `http://localhost:5000/order/${id}`;
    const {data: order, isLoading} = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }
console.log(order)
    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {order.customerName}</p>
                    <h2 class="card-title">Please Pay for: {order.toolName}</h2>
                    <p>Please pay: ${order.toolPrice}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm  order={order}/>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;