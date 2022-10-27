import React, { createContext, useEffect } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useState } from 'react';

export const AuthContext = createContext();

const auth = getAuth(app);

const Authprovider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});


    const googleLogin = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth, provider)
    }
    const gitHubLogin = (provider) =>{
        setLoading(false);
        return signInWithPopup(auth, provider)
    }
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                setLoading(false);
                setUser(currentUser);
        });
        return () =>{
            unsubscribe();
        }
    }, [])

    const authInfo = {user, googleLogin, gitHubLogin, createUser, login, logOut, loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;