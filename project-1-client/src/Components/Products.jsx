import { useContext } from "react";
import Product from "./Product";
import { ProductsContext } from "../Database/ProductProvider";
import { ClipLoader } from "react-spinners";

const Products = () => {

    const products = useContext(ProductsContext)
    console.log(products)

    return (
        <>
        <div>
            <p className="text-4xl font-bold text-center pb-4">All Products</p>
            {
                products.length === 0 ?
                <div className="text-center">
                    <ClipLoader color='green'></ClipLoader>
                </div>
                :
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
                    {
                        products.map((product, idx) => <Product key={idx} id={idx} product={product}></Product>)
                    }
                </div>
            }
        </div>
        </>
    );
};

export default Products;

