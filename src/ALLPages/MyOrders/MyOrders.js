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
    // console.log(myOrders, email)
    const handleDelete = id => {
        // console.log(id)
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

        <div className=" logIn">
            <h1 className="text-center ">My Orders  </h1>
            <div className="row container mx-auto row-cols-lg-2 row-cols-md-1 g-4">
                {
                    myOrders.map(order => <div
                        key={order._id}
                        className="col ">
                        <div className="card mb-3 border-warning border-3">
                            <div className="row  g-0">
                                <div className="col-md-4 p-2">
                                    <img src={order.orderItem.img} className=" img-fluid rounded-circle" alt="food" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold">
                                            {order.orderItem.name}</h5>
                                        <p className="card-text">
                                            <span className="fw-bold">Price :</span>Tk{order.orderItem.price}<br />
                                            <span className="fw-bold"> Address :</span>  {order.address}
                                            <br />
                                            <span className="fw-bold"> current Status : </span>
                                            {order.status}
                                        </p>
                                        <button
                                            className="bg-warning text-white px-3 py-1 rounded-pill border-0 "
                                            onClick={() => handleDelete(order._id)}> Delete Order </button>

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