import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PlaceOrder = () => {
    const { orderId } = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/items/${orderId}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [orderId])

    // let itemDetails = item.find(detail => detail._id == orderId)

    // console.log(itemDetails);
    // console.log(item);

    return (
        <div>
            {/* <div class="card">
                <img src={itemDetails?.img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h6 class="card-title"> {itemDetails?.name}</h6>
                    <p class="card-text">{itemDetails?.price}</p>

                </div>
            </div> */}
            <div class="card">
                <img src={item.img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h6 class="card-title"> {item.name}</h6>
                    <p class="card-text">{item.price}</p>

                </div>
            </div>
        </div >
    );
};

export default PlaceOrder;