import React from 'react';
import { HashLink } from 'react-router-hash-link';
// import { HashLink } from 'react-router-hash-link';



const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        {/* <a class="navbar-brand" href="#">Hidden brand</a> */}
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <HashLink to='/home'> Home</HashLink>
                            </li>
                            <li class="nav-item">
                                <HashLink to='/home#allitems'> Available Items </HashLink>
                            </li>
                            <li class="nav-item">
                                <HashLink to='/manageItems'>Manage Items</HashLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>        </div>
    );
};

export default Header;