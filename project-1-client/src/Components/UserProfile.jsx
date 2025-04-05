import { useContext, useEffect, useState } from "react";
import { AuthContext, UserDataContext, userLogOut } from "../Firebase/AuthProvider";
import { Link } from "react-router-dom";

const UserProfile = () => {

    const authData = useContext(AuthContext)
    const [ auth, setAuth ] = useState(authData)
    const loggedUserData = useContext(UserDataContext)
    const [ user, setUser ] = useState(loggedUserData)

    useEffect(()=>{
        setAuth(authData)
        setUser(loggedUserData)
    }, [loggedUserData, authData])

    const handleFunctions = () =>{
            userLogOut()
        }

    return (
        <div>
            <p>User Profie</p>
            { auth ? 
            <div>
                <p>name: {user.name}</p> 
                <p>email: {user.email}</p>
            </div>
            : null }
            {
            auth ?
            <button onClick={()=>handleFunctions()}>Log Out</button>
            :
            <Link to='/login'><button>Login</button></Link>
            }
        </div>
    );
};

export default UserProfile;