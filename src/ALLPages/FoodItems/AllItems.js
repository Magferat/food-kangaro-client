import React, { useEffect, useState } from 'react';
import Items from './Items';

const AllItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://stormy-woodland-27896.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])



    return (
        <div className="items" id="allitems">
            <h1 className="text-center font-monospace fw-bold text-danger my-3">ALL Items</h1>

            <div class="row container mx-auto row-cols-1 row-cols-lg-3 row-cols-md-2 g-4">

                {
                    items.map(item => <Items
                        key={item._id}
                        item={item}
                    ></Items>)
                }
            </div></div>
    );
};

export default AllItems;