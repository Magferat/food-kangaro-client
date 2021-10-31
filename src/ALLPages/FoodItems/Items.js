import React from 'react';
import { Link } from 'react-router-dom';

const Items = (props) => {

    const { name, img, discription, _id, price } = props.item;



    return (
        <div className="card-col">
            <div class="col h-100 mx-1 p-1">
                <div class="card border-0 h-100 text-center items-bg">
                    <img src={img} class="card-img-top w-75 mx-auto rounded-circle" alt="..." />
                    <div class="card-body">
                        <h6 class="card-title text-danger text-font">{name}</h6>
                        <small class="card-text font-monospace text-color">{discription} </small> <br />
                        <h6 className="text-danger py-3 text-font">Price : ${price} </h6>
                        <button className="bg-danger border-0 px-3 rounded-pill mt-2"><Link className="order-click fw-bold text-white" to={`/placeorder/${_id}`}> Order Now </Link> </button>


                    </div>
                </div>




            </div>
        </div>
    );
};

export default Items;