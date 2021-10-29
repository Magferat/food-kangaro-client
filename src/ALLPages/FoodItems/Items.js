import React from 'react';
import { Link } from 'react-router-dom';

const Items = (props) => {

    const { name, img, discription, _id } = props.item;



    return (
        <div>

            <div class="col h-100">
                <div class="card h-100">
                    <img src={img} class="card-img-top w-75 mx-auto" alt="..." />
                    <div class="card-body">
                        <h6 class="card-title">{name}</h6>
                        <p class="card-text">{discription} </p>
                        <Link to={`/placeorder/${_id}`}
                        >Order </Link>
                    </div>
                </div>




            </div>
        </div>
    );
};

export default Items;