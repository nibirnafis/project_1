import { NavLink, useLoaderData } from 'react-router-dom';
import './slider.css'



const SlideProduct = ({product}) => {


    // const data = useLoaderData({params})
    const { _id, name, price, photo_url, detail } = product


    return (
        <NavLink to={`/product-detail/${_id}`}>
            <div>
                <img className="transition rounded-2xl" src={photo_url} alt="" />
            </div>
        </NavLink>
    );
};

export default SlideProduct;