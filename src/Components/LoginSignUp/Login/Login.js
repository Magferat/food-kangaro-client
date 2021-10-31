import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Login = () => {

    const { logInWithGoogle, emailPassSignIn, userPassword, userEmail, error } = useAuth();
    // console.log(user)

    const history = useHistory();

    const location = useLocation();

    const redirect_uri = location.state?.from || "/home"

    const handleGoogleLogIn = () => {
        logInWithGoogle()
            .then(result => {
                console.log('hi');
                history.push(redirect_uri);
            });


    }

    const handleEmailPassSignIn = e => {
        e.preventDefault();
        emailPassSignIn()
            .then(result => {
                history.push(redirect_uri);
            })

    }


    return (
        <>
            <div className="container-fluid logIn
        ">

                <form
                    className="col-lg-5 bg-danger mx-auto my-5 py-5"
                    onSubmit={handleEmailPassSignIn}
                >
                    <h1 className="text-center"> <i className="fas fa-user"></i> <br /> Login</h1>
                    <div className="container w-75">
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
                            className="mt-5 btn fw-bold  btn-warning border px-4">Login <i className="fas fa-sign-in-alt"></i></button>
                        <h6 className="text-danger">{error}</h6>
                        <button
                            className="my-3 fw-bold  btn btn-warning border"
                            onClick={handleGoogleLogIn}
                        ><i className="fab fa-google"></i> continue with Google </button> <br />

                        <HashLink
                            className="link-style"
                            to="/signup">Don't have an account? Click Here !</HashLink>
                    </div></form>



            </div></>
    );
};

export default Login;
