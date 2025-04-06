import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useContext } from "react";
import { CartContext2 } from "./CartProvider2";
import "./product.css"

const Product = ({product, id}) => {

    const { cart, addToCart, removeFromCart } = useContext(CartContext2)
    const { _id, name, price, photo_url, detail } = product

    const checker = cart.find(cartedProduct => cartedProduct._id === _id)


    const add = () =>{
        if(!checker){
            addToCart(product)
        }
    }

    const remove = () =>{
        if(checker){
            removeFromCart(product)
        }
    }


    return (
        <div className="product flex flex-col justify-between border-green-900 hover:border-yellow-500 border-[2px] rounded-2xl p-3 gap-3">
            <img className="rounded-[12px]" src={photo_url} />
            <div>
                <div className="flex flex-col md:flex-row justify-between">
                    <p className="text-2xl font-bold">{name}</p>
                    <p><span className="text-xl">{price}</span>tk</p>
                </div>
                <p className="text-green-800 leading-4 text-sm">{detail}</p>
            </div>
            <div className="flex justify-between">
                <button className="bg-green-900 rounded-2xl text-yellow-500 font-bold px-2"><Link to={`/product-detail/${_id}`}>Detail</Link></button>
                { 
                !checker ?
                <button onClick={add} className="font-bold text-yellow-500 text-[20px]">
                    <FiShoppingCart />
                </button> : 
                <button onClick={remove} className="font-bold text-red-500 text-[20px]">
                    <FiShoppingCart />
                </button>
                }
            </div>
        </div>
    );
};

export default Product;