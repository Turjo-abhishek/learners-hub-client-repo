import React, { createContext, useEffect } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useState } from 'react';

export const AuthContext = createContext();

const auth = getAuth(app);

const Authprovider = ({children}) => {
    const [user, setUser] = useState({});


    const googleLogin = (provider) =>{
        return signInWithPopup(auth, provider)
    }
    const gitHubLogin = (provider) =>{
        return signInWithPopup(auth, provider)
    }
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser);
        });
        return () =>{
            unSubscribe();
        }
    },[])
    
    const authInfo = {user, googleLogin, gitHubLogin, createUser, login}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;