import React, { useEffect, useState } from 'react';

const ManageItems = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])


    return (
        <div>
            <h1>ki</h1>
            {
                items.map(item => <ul
                    key={item._id}
                > <li>
                        <div class="card mb-3" >
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={item.img} class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">{item.name}</h5>

                                        <p class="card-text"><small class="text-muted">{item.price}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                </ul>)
            }
        </div>
    );
};

export default ManageItems;