import React, { useEffect, useState } from 'react';
import Items from './Items';

const AllItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])



    return (
        <div id="allitems">
            <h1>Hello From ALL Items</h1>
            <h3>Total {items.length} </h3>
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