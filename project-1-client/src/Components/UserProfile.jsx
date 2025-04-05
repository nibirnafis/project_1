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
        <div className="flex flex-col justify-center items-center">
            <p className="text-4xl font-bold text-center pb-4">User Profie</p>
            { auth ? 
            <div>
                <p>name: {user.name}</p> 
                <p>email: {user.email}</p>
            </div>
            : null }
            {
            auth ?
            <button className="bg-green-950 border-yellow-500 rounded-2xl border-[1px] p-2" onClick={()=>handleFunctions()}>Log Out</button>
            :
            <Link to='/login'><button>Login</button></Link>
            }
        </div>
    );
};

export default UserProfile;