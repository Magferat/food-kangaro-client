import React from 'react';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';



const Header = () => {

    const { logOut, user } = useAuth();
    // console.log(user);
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-danger ">
                <div className="container">
                    <span className="text-warning fs-1 fw-bold"> foodKangaro! </span> </div>
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">

                        <ul class="navbar-nav mb-2 mb-lg-0 ms-auto">
                            <li class="nav-item">
                                <HashLink className="link-style mx-4" to='/home'> Home</HashLink>
                            </li>
                            <li class="nav-item">
                                <HashLink className="link-style" to='/home#allitems'> Available Items </HashLink>
                            </li>
                            <li class="nav-item">
                                <HashLink className="link-style" to='/home#about'>
                                    About Us </HashLink>
                            </li>

                            {
                                !user?.email && <li class="nav-item">
                                    <HashLink className="link-style" to='/logIn'>Login</HashLink>
                                </li>
                            }
                            {
                                !user?.email && <li class="nav-item">
                                    <HashLink className="link-style" to='/signup'>Sign Up</HashLink>
                                </li>
                            }

                            {
                                user?.email && <li class="nav-item">
                                    <HashLink className="link-style" to='/manageItems'>Manage All Orders</HashLink>
                                </li>
                            }
                            {
                                user?.email && <li class="nav-item">
                                    <HashLink className="link-style" to='/additems'>Add Items</HashLink>
                                </li>
                            }
                            {
                                user?.email && <li class="nav-item">
                                    <HashLink className="link-style" to='/myOrders'>My Orders</HashLink>
                                </li>
                            }
                            {
                                user?.email && <li class="nav-item">
                                    <div class="dropdown">
                                        <button class="btn btn-danger dropdown-toggle fw-bold" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            {user?.displayName}
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li> <button
                                                className="btn btn-light fw-bold"
                                                onClick={logOut}>Log Out</button> </li>

                                        </ul>
                                    </div>
                                </li>
                            }
                            {/* {
                                user?.email && <li class="nav-item">
                                    {user?.displayName}
                                </li>
                            }
                            {
                                user?.email && <li class="nav-item">
                                    <button onClick={logOut}>Log Out</button>
                                </li>
                            } */}


                        </ul>

                    </div>
                </div>
            </nav>        </div>
    );
};

export default Header;