import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, } from "firebase/auth";

import initalizeAuthentication from "../Components/Authentication/Firebase/firebase.init";

initalizeAuthentication()
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const auth = getAuth();



    // Continue With Google
    const logInWithGoogle = () => {
        setIsLoading(true);
        //  redirect 
        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false));

    }

    // Register New User 
    const userName = e => {
        setName(e.target.value);
        // console.log(e.target.value);
    }

    const userEmail = e => {
        setEmail(e.target.value);
    }

    const userPassword = e => {
        setPassword(e.target.value)
    }
    const RegisterUser = e => {
        e.preventDefault();
        setIsLoading(true);
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        else {
            createUserWithEmailAndPassword(auth, email, password)
                .then(result => {
                    // Signed in 
                    const user = result.user;
                    console.log(user);
                    setUser(user);
                    setUserName()
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    setError(errorMessage);

                })
                .finally(() => setIsLoading(false));
            setError('');
            // console.log(email, password)
        }
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    const emailPassSignIn = () => {
        setError('');
        setIsLoading(true);
        //  redirect 
        console.log("email and password", email, password);

        return signInWithEmailAndPassword(auth, email, password)

            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
                // console.log('hi')
            })
            .finally(() => setIsLoading(false));

    }


    // Log Out 
    const logOut = () => {
        // console.log(user);
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
                // console.log(user);
            })
            .finally(() => setIsLoading(false));
    }
    // Observing user State 
    useEffect(() => {
        const unsubscribred = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                // console.log(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false);
            return () => unsubscribred;
        });
    }, [auth]);

    return {
        logInWithGoogle, user, logOut, isLoading, error, userName,
        userPassword, userEmail, RegisterUser, emailPassSignIn
    }


}


export default useFirebase;
