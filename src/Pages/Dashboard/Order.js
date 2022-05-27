import React from 'react';

const Order = ({order}) => {
    const {toolName, orderQuantity, toolPrice} = order;
    // console.log(order.toolPrice)

    // const price = toolPrice;
    // console.log(price);
    const quantity = orderQuantity;
    const price = orderQuantity;

    // console.log(quantity);
    const total = price + quantity;
    console.log(total)

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