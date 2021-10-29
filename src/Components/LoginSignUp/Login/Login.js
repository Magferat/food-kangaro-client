import React from 'react';
import { useHistory, useLocation } from 'react-router';
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
        <div>
            <form
                onSubmit={handleEmailPassSignIn}
            >
                <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input
                            onBlur={userEmail}
                            type="email" class="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input
                            onBlur={userPassword}
                            type="password" class="form-control" id="inputPassword3" />
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Sign in</button>
                <h6 className="text-danger">{error}</h6>
            </form>
            <button
                onClick={handleGoogleLogIn}
            >Google Log in</button>
        </div>
    );
};

export default Login;