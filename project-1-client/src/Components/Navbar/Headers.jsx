import { Link } from "react-router-dom";
import { AuthContext } from "../../Firebase/AuthProvider";
import { useContext } from "react";
import "./headers.css"



const Headers = () => {

    const authData = useContext(AuthContext)
    const admins = [ "gr1Ia3T9RYSW2EokvNwWVPYRl9c2", "abfiRwwyiEOdhuawcsn5y78JX4C2" ]


    return (
        <div className="hidden md:flex gap-3">
            <Link className='act' to='/'>Home</Link>
            <Link className='act' to='/products'>Products</Link>
            { authData && admins.includes(authData.uid) ? <Link className='act' to='/manage-products'>Manage Products</Link> : null }
        </div>
    );
};

export default Headers;