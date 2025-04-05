import { NavLink } from "react-router-dom";
import "./banner.css"

const Banners = () => {


    return (
        <>
        <div className="reltive flex items-center mb-10">
            <div className="absolute ml-50">
                <p className="text-2xl font-medium leading-1">Get our <br /><span className="text-9xl font-bold">Food</span><br /> from <span className="text-6xl font-bold">anywhere</span></p>
                <button className="banner-btn text-2xl font-medium bg-green-950 border-yellow-500 border-[1px] p-2 mr-2 rounded-[20px] mt-5">Order Now</button>
            </div>
            <NavLink to=''>
            <div><img className="rounded-xl" src="https://res.cloudinary.com/dcny80yei/image/upload/v1742586949/burger_cover_rqelpw.jpg" alt="" /></div>
            </NavLink>
        </div>
        </>
    );
};

export default Banners;


