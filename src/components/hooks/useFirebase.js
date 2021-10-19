import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import Firebaseinit from "../Firebase/Firebase.init";


Firebaseinit()

const useFirebase = () => {
    const [isloading, setIsloading] = useState(true)
    const [user, setuser] = useState({})
    const auth = getAuth();
    const singnInWithGoogle = () => {
        setIsloading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }

    //observer user
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setuser(user)
            }
            else {
                setuser({})
            }
            setIsloading(false)
        });

    }, []);

    const registerNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }
    // set user name 
    const setUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(result => {

            })
    }

    // log in function 
    const handelsingIn = (email, password
    ) => {
        return signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
            })
    }


    // logout 
    const logOut = () => {
        setIsloading(true)
        signOut(auth)
            .then(() => {
                setuser({})
            })
            .finally(() => setIsloading(false))
    }

    return { user, singnInWithGoogle, setuser, logOut, registerNewUser, setUserName, handelsingIn, isloading, setIsloading }
}
export default useFirebase;

