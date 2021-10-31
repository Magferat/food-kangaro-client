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

    // let itemDetails = item.find(detail => detail._id == orderId)

    // console.log(itemDetails);
    // console.log(item);

    return (
        <div className="d-flex flex-lg-row
        ">
            <div class="card">
                <img src={item.img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h6 class="card-title"> {item.name}</h6>
                    <p class="card-text">{item.price}</p>

                </div>
            </div>
            <form
                className="d-flex flex-column
            "
                onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name", { required: true, maxLength: 20 })} placeholder="Your Name" />
                <input defaultValue={user.email} {...register("email", { required: true })} placeholder="your@email.com" />
                <textarea {...register("address", { required: true })} placeholder="Address" />

                <input type="number" {...register("number")} placeholder="Your Phone Number" />
                <input type="submit" />
            </form>
        </div >
    );
};

export default PlaceOrder;