import { useContext } from "react";
import { ProductsContext } from "../../../Database/ProductProvider";
import SlideProduct from "./SlideProduct";
import './slider.css'

const ProductsSlider = () => {

    const products = useContext(ProductsContext)

    return (
        <>
        <div className="clip-mask py-[20px] mb-10">
            <p className="text-center font-bold text-5xl mb-8">Our Products</p>
            <div className="slider grid grid-cols-2 md:grid-cols-3 gap-3">
                {
                    products.map(product => <SlideProduct key={product._id} product={product}></SlideProduct>)
                }
            </div>
        </div>
        </>
    );
};

export default ProductsSlider;

// flex flex-col md:flex-row gap-3