import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {
    const { orderId } = useParams();
    const [item, setItem] = useState([]);
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        const orderInfo = data;
        data.status = "Pending";
        data.orderItem = item;


        axios.post('https://stormy-woodland-27896.herokuapp.com/orders', orderInfo)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Your Order has been placed');
                    reset();
                }
                // console.log(res);

            })
    }

    useEffect(() => {
        fetch(`https://stormy-woodland-27896.herokuapp.com/items/${orderId}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [orderId])
    console.log(item)

    return (
        <div className="banner-placeOrder">
            <div className="d-flex flex-lg-row flex-column container
        "> <div className="container mt-5">
                    <h2 className=" fw-bold text-center">Order Details</h2>
                    <div class="card mt-5 d-flex flex-lg-row p-2 border-warning border-1 shadow-lg">
                        <img src={item.img} class="placeOrder-img" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title text-font">
                                {item.name}</h5>
                            <p class="card-text p-0">
                                <span className="fw-bold">
                                    Price</span> : Tk{item.price}
                                <br />
                                <span className="fw-bold"> Ratings</span> : {item.ratings} <br />
                                <span className="fw-bold">Details </span>: {item.discription}
                                <p className="text-danger fw-bold"> Please fill this form </p>
                            </p>


                        </div>
                    </div></div>
                <div className="container mt-5">
                    <h2 className=" fw-bold text-center">Order Confirmation Form</h2>
                    <form
                        className="d-flex flex-column placeOrder-form w-lg-50"
                        onSubmit={handleSubmit(onSubmit)}>

                        <input defaultValue={user.displayName} {...register("name", { required: true, maxLength: 20 })} placeholder="Your Name" />
                        <input defaultValue={user.email} {...register("email", { required: true })} placeholder="your@email.com" />
                        <textarea {...register("address", { required: true })} placeholder="Address" />

                        <input type="number" {...register("number")} placeholder="Your Phone Number" />

                        <input type="submit" className=" border-danger border-5 rounded bg-warning text-danger fw-bold" />
                    </form>
                </div ></div></div>
    );
};

export default PlaceOrder;