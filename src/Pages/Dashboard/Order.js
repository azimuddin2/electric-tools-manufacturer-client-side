import React from 'react';

const Order = ({ order }) => {
    const { toolName, orderQuantity, toolPrice } = order;
    

    return (
        <div>
            <tr>
                <th>1</th>
                <td>{toolName}</td>
                <td>{orderQuantity}</td>
                <td>{toolPrice}</td>
                <td>{ }</td>
            </tr>
        </div>
    );
};

export default Order;