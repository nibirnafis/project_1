import { useContext, useState } from "react";
import Headers from "./Headers";
import { NavLink } from "react-router-dom";
import { AuthContext, userLogOut } from "../../Firebase/AuthProvider";
import { RxAvatar } from "react-icons/rx";



const Navbar = () => {

    const authData = useContext(AuthContext)
    const [ displayMenu, setDisplayMenu ] = useState(false)
    const admins = [ "gr1Ia3T9RYSW2EokvNwWVPYRl9c2", "abfiRwwyiEOdhuawcsn5y78JX4C2" ]


    const handleMenu = () =>{
        setDisplayMenu(!displayMenu)
    }


    return (
        <>
        <div className="bg-green-900">
            <div className="flex justify-between items-center py-2 mb-10 max-w-[1320px] m-auto px-3">
                <p className="text-3xl font-bold">Food App</p>
                <Headers></Headers>
                <div>
                    {
                    !authData ? <NavLink className={'border-yellow-500 border-[1px] p-1 mr-2 rounded-[10px]'} to='/login'>Login</NavLink>
                     : 
                    <div className="relative">
                        <div className= {
                            displayMenu ? "hidden" :
                            "flex flex-col absolute right-4 top-4 bg-amber-400 border-amber-400 border-b-[1px] rounded-[5px] text-green-900 min-w-[150px] text-center font-semibold"} >
                            <NavLink className='border-b-2 mx-3 md:hidden' to='/'>Home</NavLink>
                            <NavLink className='border-b-2 mx-3 md:hidden' to='/products'>Products</NavLink>
                            { authData && admins.includes(authData.uid) ? <NavLink className='border-b-2 mx-3 md:hidden' to='/manage-products'>Manage Products</NavLink> : null }
                            <NavLink className='border-b-2 mx-3' to='/profile'>My Profile</NavLink>
                            <NavLink className='border-b-2 mx-3' to='/my-orders'>My Orders</NavLink>
                            <NavLink className='border-b-2 mx-3' to='/about-us'>About Us</NavLink>
                            <NavLink className='border-b-2 mx-3' to='/contact-us'>Contact Us</NavLink>
                            <button onClick={userLogOut}><NavLink className='mx-3 text-red-700' to='/'>Log Out</NavLink></button>
                        </div>
                        <button onClick={handleMenu}>
                            <RxAvatar className="text-yellow-500 text-3xl" />
                        </button>
                    </div>
                    }
                    {
                    !authData ? <NavLink className={'border-yellow-500 border-[1px] p-1 rounded-[10px]'} to='/register'>Register</NavLink>
                     : null
                    }
                </div>
            </div>
        </div>
        </>
        
    );
};

export default Navbar;