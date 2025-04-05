import { useContext } from "react";
import { ProductsContext } from "../../../Database/ProductProvider";
import SlideProduct from "./SlideProduct";
import './slider.css'

const ProductsSlider = () => {

    const products = useContext(ProductsContext)

    return (
        <>
        <div className="clip-mask py-[20px] mb-10">
            <div className="slider flex gap-3">
            <p>Our Products</p>
                {
                    products.map(product => <SlideProduct key={product._id} product={product}></SlideProduct>)
                }
            </div>
        </div>
        </>
    );
};

export default ProductsSlider;