import React from 'react';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Signup = () => {
    const { userEmail, userName, error, userPassword, RegisterUser } = useAuth();

    return (
        <>
            <div className="container-fluid logIn
        ">

                <form
                    className="col-lg-5 bg-danger mx-auto my-5 py-5"
                    onSubmit={RegisterUser}
                >


                    <div className="container w-75">
                        <label htmlFor="inputName" class="col-sm-2 col-form-label">Name</label>

                        <input onBlur={userName}
                            type="text" className="form-control" id="inputName" placeholder="Your Name" />
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>

                        <input
                            className="mb-4"
                            onBlur={userEmail}
                            type="email" class="form-control" id="inputEmail3" />


                        <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>

                        <input
                            className="mb-4"
                            onBlur={userPassword}
                            type="password" class="form-control" id="inputPassword3" />

                        <button
                            type="submit"
                            class="mt-5 btn fw-bold  btn-warning border px-4">Sign in</button>
                        <h6 className="text-danger">{error}</h6>


                        <HashLink
                            className="link-style"
                            to="/logIn">Don't have an account? Click Here !</HashLink>
                    </div></form>



            </div>
        </>

    );
};

export default Signup;


