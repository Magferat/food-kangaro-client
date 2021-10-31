import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddItems = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://stormy-woodland-27896.herokuapp.com/items', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Your Item has been added');
                    reset();
                }
            })
    }

    return (
        <div className="container-fluid d-flex flex-lg-row flex-sm-column
        ">
            <div className="container p-5 add-item">
                <h3 className="text-center text-danger fw-bold mb-3">Add Items</h3>

                <form
                    className="d-flex flex-column"
                    onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 30 })} placeholder="Name" />

                    <input {...register("img")} placeholder="Image Url" />
                    <input type="number" step="any" {...register("price")} placeholder="Item's Price" />
                    <input type="number" step="any" {...register("ratings", { min: 0, max: 5 })} placeholder="Ratings (1-5)" />
                    <textarea {...register("discription")} placeholder="Description" />
                    <input className="text-white bg-warning border-5 shadow-lg fw-bold fs-5 border-danger" type="submit" />
                </form>
            </div>
            <div className="container">
                <img
                    className="img-fluid"
                    src="https://image.freepik.com/free-vector/delivery-man-handling-parcel-package-box-customer_218660-352.jpg" alt="" />
            </div>


        </div>
    );
};

export default AddItems;