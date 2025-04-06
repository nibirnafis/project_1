import { useContext, useState } from "react";
import Headers from "./Headers";
import { Link } from "react-router-dom";
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
            <div className="flex justify-between items-center py-3 mb-10 max-w-[1320px] m-auto px-3">
                <Link to="/"><p className="text-3xl font-bold">Food App</p></Link>
                <Headers></Headers>
                <div>
                    {
                    !authData ? <Link className={'border-yellow-500 border-[1px] p-1 mr-2 rounded-[10px]'} to='/login'>Login</Link>
                     : 
                    <div className="relative">
                        <div className= {
                            !displayMenu ? "hidden" :
                            "flex flex-col absolute right-4 top-4 bg-amber-400 border-amber-400 border-b-[1px] rounded-[5px] text-green-900 min-w-[150px] text-center font-semibold z-1"} >
                            <Link className='border-b-2 mx-3 md:hidden' to='/'>Home</Link>
                            <Link className='border-b-2 mx-3 md:hidden' to='/products'>Products</Link>
                            { authData && admins.includes(authData.uid) ? <Link className='border-b-2 mx-3 md:hidden' to='/manage-products'>Manage Products</Link> : null }
                            <Link className='border-b-2 mx-3' to='/profile'>My Profile</Link>
                            <Link className='border-b-2 mx-3' to='/my-orders'>My Orders</Link>
                            <Link className='border-b-2 mx-3' to='/about-us'>About Us</Link>
                            <Link className='border-b-2 mx-3' to='/contact-us'>Contact Us</Link>
                            <button onClick={userLogOut}><Link className='mx-3 text-red-700' to='/'>Log Out</Link></button>
                        </div>
                        <button onClick={handleMenu}>
                            <RxAvatar className="text-yellow-500 text-3xl" />
                        </button>
                    </div>
                    }
                    {
                    !authData ? <Link className={'border-yellow-500 border-[1px] p-1 rounded-[10px]'} to='/register'>Register</Link>
                     : null
                    }
                </div>
            </div>
        </div>
        </>
        
    );
};

export default Navbar;