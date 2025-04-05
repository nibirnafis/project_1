import { useContext, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import Item from "./Item";
import { CartContext2 } from "./CartProvider2";
import { AuthContext } from "../Firebase/AuthProvider";

const Cart = () => {
    
    const { cart, totalAmount } = useContext(CartContext2)
    const authData = useContext(AuthContext)

    const [ displayCart, setDisplayCart ] = useState(true)


    const handleShowCart = () => {
        displayCart ? setDisplayCart(false) : setDisplayCart(true)
    }
    


    return (
        <>

        <div className={ authData ? "flex flex-col items-end" : 'hidden'}>
            {   
                displayCart && cart.length > 0
                ?
                <div className="bg-green-900 border-[1px] rounded-xl">
                    <table className="w-[300px] ">
                        <thead>
                            <tr className="flex justify-between text-green-900 bg-amber-400 rounded-t-xl">
                                <th className="w-[100px] text-left">Item</th>
                                <th>Price</th>
                                <th>Total</th>
                                <th>Qty</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, idx) => <Item key={idx} id={idx} item={item}></Item>)
                            }
                            <tr className="flex justify-between text-green-900 bg-amber-400 rounded-b-xl">
                                <th className="w-[100px] text-left">Total</th>
                                <th></th>
                                <th>{totalAmount}</th>
                                <th></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                :
                null
            }
            

            <div className="flex bg-amber-400 w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] rounded-full relative">
                {
                    !displayCart || cart.length === 0 ?
                    <div className="absolute left-7 bottom-9 lg:left-10 lg:bottom-11 text-amber-400 bg-red-600 px-2 rounded-full">{cart.length}</div>
                    :
                    null
                }
                <button onClick={handleShowCart} className="text-green-900 text-[30px] lg:text-[35px] m-auto">
                    <FiShoppingCart />
                </button>
            </div>
        </div>
        
        </>
    );
};

export default Cart;






































/* const { cart, totalAmount } = useContext(CartContext)
    const [ carted, setCarted ] = useState(cart)
    const [ price, setPrice ] = useState(totalAmount)
    const [ displayCart, setDisplayCart ] = useState(true)


    useEffect(()=>{
        setCarted(cart)
        setPrice(totalAmount)
    }, [cart, totalAmount])


    const handleShowCart = () => {
        if(displayCart){
            setDisplayCart(false)
        } 
        else(
            setDisplayCart(true)
        )
    } */