import { useContext, useState } from 'react';
import { CartContext2 } from './CartProvider2';


const Item = ({item, id}) => {

    const {dispatch} = useContext(CartContext2)
    const { _id, name, price, quantity, totalPrice, photo_url, detail } = item 
    

    return (
        <tr className={ id === 0 ? "flex justify-between items-center text-amber-400 mx-2"
         : "flex justify-between items-center text-amber-400 border-amber-400 border-t-[1px] mx-2"}>
            <td className="w-[100px] text-left">{name}</td>
            <td className="m-auto">{price}</td>
            <td className="m-auto">{totalPrice}</td>
            <td><button className='font-bold text-red-600 rounded-full' onClick={()=>dispatch({ type: "decrement", payload: {item} })}>-</button></td>
            <td>{quantity}</td>
            <td><button className='font-bold text-green-600 rounded-full' onClick={()=>dispatch({ type: "increment", payload: {item} })}>+</button></td>
        </tr>
        
    );
};

export default Item;
