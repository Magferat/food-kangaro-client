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
        <div>
            <h3>Add Items</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 30 })} placeholder="Name" />
                <textarea {...register("discription")} placeholder="Description" />
                <input {...register("img")} placeholder="img" />
                <input type="number" step="any" {...register("price")} placeholder="Item's Price" />
                <input type="number" step="any" {...register("ratings (1-5)", { min: 0, max: 5 })} placeholder="ratings" />
                <input type="submit" />
            </form>

        </div>
    );
};

export default AddItems;