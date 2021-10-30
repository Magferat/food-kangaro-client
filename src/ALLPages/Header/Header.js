import React from 'react';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';



const Header = () => {

    const { logOut, user } = useAuth();
    // console.log(user);
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

                            {
                                !user?.email && <li class="nav-item">
                                    <HashLink to='/logIn'>Login</HashLink>
                                </li>
                            }
                            {
                                !user?.email && <li class="nav-item">
                                    <HashLink to='/signup'>Sign Up</HashLink>
                                </li>
                            }

                            {
                                user?.email && <li class="nav-item">
                                    <HashLink to='/manageItems'>Manage Items</HashLink>
                                </li>
                            }
                            {
                                user?.email && <li class="nav-item">
                                    <HashLink to='/myOrders'>My Orders</HashLink>
                                </li>
                            }
                            {
                                user?.email && <li class="nav-item">
                                    {user?.displayName}
                                </li>
                            }
                            {
                                user?.email && <li class="nav-item">
                                    <button onClick={logOut}>Log Out</button>
                                </li>
                            }


                        </ul>

                    </div>
                </div>
            </nav>        </div>
    );
};

export default Header;