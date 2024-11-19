import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config"
import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true); 

    const registerNewAccount = (email, password) =>{
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) =>{
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () =>{
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signOutUser = () =>{
        setIsLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, image) =>{
        setIsLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image,
        })
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setIsLoading(false);
            setUser(currentUser)
        });
        return ()=>{
            unSubscribe();
        }
    }, [])

    const authInfo = {
        registerNewAccount,
        signInUser,
        signInWithGoogle,
        signOutUser,
        updateUserProfile,
        user,
        isLoading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;