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
                    <h2 className="text-center"> <i className="fas fa-user"></i> <br />  Sign Up! </h2>

                    <div className="container w-75">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>

                        <input onBlur={userName}
                            type="text" className="form-control" id="inputName" placeholder="Your Name" />
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>

                        <input
                            className="mb-4"
                            onBlur={userEmail}
                            type="email" className="form-control" id="inputEmail3" />


                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>

                        <input
                            className="mb-4"
                            onBlur={userPassword}
                            type="password" className="form-control" id="inputPassword3" />

                        <button
                            type="submit"
                            className="mt-5 btn fw-bold  btn-warning border px-4">Sign in <i className="fas fa-sign-in-alt"></i></button>
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


