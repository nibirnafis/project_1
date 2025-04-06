import { NavLink } from "react-router-dom";
import "./banner.css"

const Banners = () => {


    return (
        <>
        <div className="flex flex-col md:flex-row justify-around items-center mb-10 ">
            <div>
                <p className="text-left text-xl md:text-2xl font-medium leading-1">Get your <br /><span className="text-center text-6xl md:text-8xl font-bold">Food</span>from<br /><span className="text-right md:text-left text-4xl md:text-5xl font-bold">anywhere</span></p>
                <NavLink to='/products'><button className="banner-btn text-2xl font-medium bg-green-950 border-yellow-500 border-[1px] p-1 mr-2 rounded-2xl mt-5">Order Now</button></NavLink>
            </div>
            <div><img className="rounded-xl py-5" src="https://res.cloudinary.com/dcny80yei/image/upload/v1743870073/food_pic_wgkcfd.png" alt="" /></div>
        </div>
        </>
    );
};

export default Banners;


// border-green-800 border-dashed border-2 rounded-2xl