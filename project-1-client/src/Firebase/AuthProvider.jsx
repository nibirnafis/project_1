import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import auth from "./firebaseConfig";
import { createContext, useEffect, useState } from "react";



// user registration
export const userRegistration = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            const userInfo = userCredential.user
            userToDatabase(name, userInfo)
            userLogOut()
        })
        .catch(error => {
            const errorCode = error.code
            const errorMessage = errorCode.message
            // console.log(errorMessage)
        })
}



// add User to database
const userToDatabase = (name, userInfo) =>{
    const email = userInfo.email
    const fire_uid = userInfo.uid
    const user = { name, email, fire_uid }
    fetch('https://project-1-back-end-7lux.onrender.com/register-user', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(res => res.json())
}



// user login
export const userLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
    })
    .catch(error => {
        // const errorCode = error.code
        // const errorMessage = errorCode.message
        /* console.log(error.code)
        if(error){
            console.log('you cant log in')
        } */
    })
}



// user logout
export const userLogOut = () =>{
    signOut(auth)
    .then(()=>{
        // console.log('Your account is logged out')
    })
    .catch((error)=>{
        // console.log(error)
    })
}



// Auth Provider
export const AuthContext = createContext(null)
export const UserDataContext = createContext(null)

const AuthProvider = ({children}) => {

    const [authData, setAuthData] = useState({}) //--------------Auth Info
    const [loggedUserData, setLoggedUserData] = useState({}) //--------------Database data

    // state observer
    useEffect(()=> {
        onAuthStateChanged(auth, (user)=>{
            if(user){
                getData(user)
                setAuthData(user)
            }
            else{
                setAuthData(user)
                // console.log(user)
            }
        })
    }, [])
    

    // get data from database
    const getData = async(user) =>{
        const fire_uid = user.uid
        const responce = await fetch(`https://project-1-back-end-7lux.onrender.com/user-data/${fire_uid}`, {
            method: "GET",
        })
        const data = await responce.json()
        setLoggedUserData(data)
    }


    return (
        <AuthContext.Provider value={authData}>
            <UserDataContext.Provider value={loggedUserData}>
                {children}
            </UserDataContext.Provider>
        </AuthContext.Provider>
    );
};



export default AuthProvider;