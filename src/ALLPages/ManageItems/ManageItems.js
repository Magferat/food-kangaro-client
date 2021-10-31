import React, { useEffect, useState } from 'react';

const ManageItems = () => {

    const [orders, setOrders] = useState([]);
    // const [status, setStatus] = useState('');

    useEffect(() => {
        fetch('https://stormy-woodland-27896.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleDelete = id => {
        console.log(id)
        const confirmation = window.confirm('Are you sure, you want to delete?');
        if (confirmation) {
            const url = `https://stormy-woodland-27896.herokuapp.com/orders/${id}`;
            // console.log(url)
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log('hello')
                    if (data.deletedCount > 0) {
                        const restOrders = orders.filter(order => order._id !== id);
                        setOrders(restOrders);
                    }
                })
        };
    }

    const handleStatus = id => {
        console.log('clicked')
        const url = `https://stormy-woodland-27896.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('Status changed to "Appropved" ');
                    // setOrders(data);
                    // setStatus()

                }
            })
    }

    console.log(orders);
    return (
        <div>
            <h1>ki</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">SN</th>
                        <th scope="col">Customer Info</th>
                        <th scope="col">Order Details</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        orders.map(order => <tr
                            key={order._id}
                        >
                            <th> {orders.indexOf(order) + 1} </th>
                            <td> {order.name} <br /> {order.number} <br /> {order.email} <br /> {order.address} </td>
                            <td> {order.orderItem.name} <br />
                                Price : {order.orderItem.price} $ </td>
                            <td> <button onClick={() => handleStatus(order._id)}>{order.status} </button> </td>
                            <td> <button
                                onClick={() => handleDelete(order._id)}
                            >Delete</button> </td>
                        </tr>)
                    }


                </tbody>
            </table>



        </div>
    );
};

export default ManageItems;