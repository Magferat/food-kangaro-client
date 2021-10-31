import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {

    const [myOrders, setMyOrders] = useState([]);

    const { user } = useAuth();
    const email = user.email
    useEffect(() => {
        fetch(`https://stormy-woodland-27896.herokuapp.com/myOrders/${email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [email])
    console.log(myOrders, email)
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
                        const restOrders = myOrders.filter(order => order._id !== id);
                        setMyOrders(restOrders);
                    }
                })
        };
    }



    return (
        <div>
            <h1>My Orders {myOrders.length} </h1>
            <div class="container mx-auto row row-cols-1 row-cols-md-1 g-4">
                {
                    myOrders.map(order => <div
                        key={order._id}
                        class="col ">
                        <div class="card w-50 mb-3">
                            <div class="row  g-0">
                                <div class="col-md-4">
                                    <img src={order.orderItem.img} class=" img-fluid" alt="food" />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">{order.orderItem.name}</h5>
                                        <p class="card-text">{order.orderItem.price}</p>
                                        <button onClick={() => handleDelete(order._id)}> Delete Order </button>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }


            </div>
        </div>
    );
};

export default MyOrders;