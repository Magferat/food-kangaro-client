import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Signup = () => {
    const { userEmail, userName, error, userPassword, RegisterUser } = useAuth();

    return (
        <div>
            <form
                onSubmit={RegisterUser}
            >
                <div className="row mb-3 ">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label p-1">Name</label>
                    <div className="col-sm-10">
                        <input onBlur={userName}
                            type="text" className="form-control w-75" id="inputName" placeholder="Your Name" />
                    </div></div>
                <div class="row mb-3">
                    <label for="" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input onBlur={userEmail}
                            type="email" class="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input onBlur={userPassword}
                            type="password" class="form-control" id="inputPassword3" />
                        {error}
                    </div>
                </div>

                <button type="submit" class="btn btn-primary">Sign in</button>
            </form>
        </div>
    );
};

export default Signup;