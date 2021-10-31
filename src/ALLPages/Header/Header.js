import React from 'react';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';



const Header = () => {

    const { logOut, user } = useAuth();
    // console.log(user);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-danger ">

                <span className="text-warning fs-1 fw-bold"> foodKangaro! </span>
                <div className="container-fluid">
                    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                        <ul className="navbar-nav mb-2 mb-lg-0 text-center ms-auto">
                            <li className="nav-item">
                                <HashLink className="link-style mx-4" to='/home'> Home</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className="link-style" to='/home#allitems'> Items </HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className="link-style" to='/home#about'>
                                    About </HashLink>
                            </li>

                            {
                                !user?.email && <li className="nav-item">
                                    <HashLink className="link-style" to='/logIn'>Login</HashLink>
                                </li>
                            }
                            {
                                !user?.email && <li className="nav-item">
                                    <HashLink className="link-style" to='/signup'>Sign Up</HashLink>
                                </li>
                            }

                            {
                                user?.email && <li className="nav-item">
                                    <HashLink className="link-style" to='/manageItems'>Manage All Orders</HashLink>
                                </li>
                            }
                            {
                                user?.email && <li className="nav-item">
                                    <HashLink className="link-style" to='/additems'>Add Items</HashLink>
                                </li>
                            }
                            {
                                user?.email && <li className="nav-item">
                                    <HashLink className="link-style" to='/myOrders'>My Orders</HashLink>
                                </li>
                            }
                            {
                                user?.email && <li className="nav-item">
                                    <div className="dropdown">
                                        <button className="btn btn-danger dropdown-toggle fw-bold" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            {user?.displayName}
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li> <button
                                                className="btn btn-light fw-bold"
                                                onClick={logOut}>Log Out</button> </li>

                                        </ul>
                                    </div>
                                </li>
                            }
                            {/* {
                                user?.email && <li className="nav-item">
                                    {user?.displayName}
                                </li>
                            }
                            {
                                user?.email && <li className="nav-item">
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