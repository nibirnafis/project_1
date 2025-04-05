import { createContext, useEffect, useReducer, useState } from "react";

export const CartContext2 = createContext(null)

export const reducer = (cart, action) =>{
    switch(action.type){
        case 'add to cart':
            return  [ ...cart, action.payload.newProduct ]
        case 'remove from cart':
            {
                const newCart = cart.filter( cartedProduct => cartedProduct._id !== action.payload.product._id )
                return newCart
            }
        case 'increment':
            {   
                const updatedCart = cart.map(cartedProduct => {
                    if(cartedProduct._id === action.payload.item._id){
                        const { _id, name, price, quantity, photo_url, detail, totalPrice } = cartedProduct
                        const newQuantity = quantity + 1
                        const newTotalPrice = parseInt(totalPrice) + parseInt(price)
                        const updatedProduct = { ...cartedProduct, totalPrice: newTotalPrice.toString(), quantity: newQuantity }
                        return updatedProduct
                    }
                    return cartedProduct
                })
                return updatedCart
            }
        case 'decrement':
            {   
                const newCart = cart.map(cartedProduct => {
                    if(cartedProduct._id === action.payload.item._id){
                        const { _id, name, price, quantity, photo_url, detail, totalPrice } = cartedProduct
                        const newQuantity = quantity - 1
                        const newTotalPrice = parseInt(totalPrice) - parseInt(price)
                        const updatedProduct = { ...cartedProduct, totalPrice: newTotalPrice.toString(), quantity: newQuantity }
                        return updatedProduct
                    }
                    return cartedProduct
                })
                const updatedCart = newCart.filter(updatedProduct => updatedProduct.quantity > 0)
                return updatedCart
            }
        }
}


const CartProvider2 = ({children}) => {

    const [ cart, dispatch ] = useReducer(reducer, [])
    const [ totalAmount, setTotalAmount ] = useState(0)

    
    useEffect(()=>{
        const priceList = cart.map(cartedProduct => {
            const price = parseInt(cartedProduct.totalPrice)
            return price
       })
       const amount = priceList.reduce((a, b) => a + b, 0)
       setTotalAmount(amount)
    }, [cart])



    const addToCart = (product) =>{ //------------used in product component
        const { _id, name, price, photo_url, detail } = product
        const quantity = 1
        const newProduct = { _id, name, price, quantity, photo_url, detail, totalPrice: price }
        dispatch({type: 'add to cart', payload: {newProduct}})
    }
    
    
    const removeFromCart = (product) =>{ //------------used in product component
        dispatch({type: 'remove from cart', payload: {product}})
    }



    return (
        <>
            <CartContext2.Provider value={{cart, totalAmount, addToCart, removeFromCart, dispatch}}>
                {children}
            </CartContext2.Provider>
        </>
    );
};

export default CartProvider2;