import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Firebase/AuthProvider";
import { useContext } from "react";



const Headers = () => {

    const authData = useContext(AuthContext)
    const admins = [ "gr1Ia3T9RYSW2EokvNwWVPYRl9c2", "abfiRwwyiEOdhuawcsn5y78JX4C2" ]


    return (
        <div className="hidden md:flex gap-3 ">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/products'>Products</NavLink>
            { authData && admins.includes(authData.uid) ? <NavLink to='/manage-products'>Manage Products</NavLink> : null }
        </div>
    );
};

export default Headers;