import React from 'react';

const Footer = () => {
    return (
        <div className="container-fluid bg-dark
        text-white footer py-3">
            <div className="container-fluid d-lg-flex ">
                <div className="container my-2">
                    © 2020 <span className="text-warning ">foodKangaro </span>

                </div>

                <div className="container text-end">
                    Press Help center Terms and conditions Privacy policy Refund Account Terms & Conditions Cashback Program Security Partner with us How foodpanda works Download foodpanda Apps Careers Corporate Customer foodkangaroo Deals Grocery delivery Eid

                </div>

            </div>
            <h5 className=" border-top border-1 my-2 border-light text-danger">Popular Cuisines</h5>
            <div className="container-fluid d-lg-flex ">

                <div className="container"><ul className="list-group">
                    <li>American</li>
                    <li>Bakery & Cake</li>
                    <li>Burger</li>
                    <li>Chinese</li>
                    <li>Dessert</li>
                </ul></div>
                <div className="container"><ul className="list-group">
                    <li>Fast food</li>
                    <li>Healthy Food</li>
                    <li>Indian</li>
                    <li>Japanese</li>
                    <li>Italian</li>
                </ul></div>
                <div className="container"><ul className="list-group">
                    <li>Korean</li>
                    <li>Mexican</li>
                    <li>A third item</li>
                    <li>Middle Eastern</li>
                    <li>Thai</li>
                </ul></div></div>
        </div>
    );
};

export default Footer;