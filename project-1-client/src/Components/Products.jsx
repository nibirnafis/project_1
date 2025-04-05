import { useContext } from "react";
import Product from "./Product";
import { ProductsContext } from "../Database/ProductProvider";

const Products = () => {

    const products = useContext(ProductsContext)

    return (
        <>
        <div className="mx-3">
            <p className="text-4xl font-bold text-center pb-4">All Products</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
                {
                    products.map((product, idx) => <Product key={idx} id={idx} product={product}></Product>)
                }
            </div>
        </div>
        </>
    );
};

export default Products;