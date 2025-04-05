import { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../Firebase/AuthProvider";

const MyOrders = () => {

    const loggedUserData = useContext(UserDataContext)
    const [ user, setUser ] = useState(loggedUserData)

    useEffect(()=>{
        setUser(loggedUserData)
    }, [loggedUserData])

    return (
        <div>
            <p>My Orders</p>

        </div>
    );
};

export default MyOrders;