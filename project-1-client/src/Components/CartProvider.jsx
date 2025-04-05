import { createContext, useState } from "react";

export const CartContext = createContext(null)


const CartProvider = ({children}) => {

    const [ cart, setCart ] = useState([])
    const [ updatedCart, setUpdatedCart ] = useState([])
    const [ totalAmount, setTotalAmount ] = useState(0)

    // console.log(cart, updatedCart)


    function addToCart(){ //------------------used in product
        
    }






    function addMoreItem(){ //------------------used in cart
        
    }


    
    function minusItem(){ //------------------used in cart
        
    }



    function removeFromCart(){ //------------------used in product
        
    }



    function addPrice(){ //------------------used for calculating total price when added
        
    }
    

    function removePrice(){ //------------------used for calculating total price when removed
        
    }


    return (
        <CartContext.Provider value={{cart, updatedCart, addToCart, minusItem, addMoreItem, removeFromCart, totalAmount}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;

































/* const [ cart, setCart ] = useState([])
    const [ updatedCart, setUpdatedCart ] = useState([])
    const [ totalAmount, setTotalAmount ] = useState(0)

    // console.log(cart, updatedCart)


    function addToCart(product){ //------------------used in product
        const newCart = [ ...cart, product ]
        setCart(newCart)
        setUpdatedCart(newCart)
        addPrice(newCart)
    }



    function addMoreItem(product){ //------------------used in cart
        const { _id, name, stringPrice, photo_url, detail, newQuantity } = product
        const price = stringPrice
        const quantity = newQuantity
        const newProduct = { _id, name, price, photo_url, detail, quantity }
        const oldCart = updatedCart.filter(prod => prod._id !== newProduct._id)
        const newCart = [ ...oldCart, newProduct ]
        setUpdatedCart(newCart)
        addPrice(newCart)
    }


    
    function minusItem(product){ //------------------used in cart
        const { _id, name, stringPrice, photo_url, detail, newQuantity } = product
        const price = stringPrice
        const quantity = newQuantity
        const newProduct = { _id, name, price, photo_url, detail, quantity }
        const oldCart = updatedCart.filter(prod => prod._id !== newProduct._id)
        const newCart = [ ...oldCart, newProduct ]
        setUpdatedCart(newCart)
        removePrice(newProduct)
    }



    function removeFromCart(item){ //------------------used in product
        if(Object.hasOwn(item, 'stringPrice')){
            const { _id, name, stringPrice, photo_url, detail, newQuantity } = item
            const price = stringPrice
            const quantity = newQuantity
            const newProduct = { _id, name, price, photo_url, detail, quantity }
            const newCart = cart.filter(cartItem => cartItem._id !== newProduct._id)
            const newUpdatedCart = updatedCart.filter(updatedCartItem => updatedCartItem._id !== newProduct._id)
            setCart(newCart)
            setUpdatedCart(newUpdatedCart)
            removePrice(newProduct)
        }
        else{
            const newCart = cart.filter(cartItem => cartItem._id !== item._id)
            setCart(newCart)
            setUpdatedCart(newCart)
            removePrice(item)
        }
    }



    function addPrice(newCart){ //------------------used for calculating total price when added
        const priceList  = newCart.map(item => {
            const stringPrice = item.price
            const itemPrice = parseInt(stringPrice)
            return itemPrice
        })
        
        let sum = 0

        for(let price of priceList){
            sum = sum + price
        }

        setTotalAmount(sum)
    }
    

    function removePrice(item){ //------------------used for calculating total price when removed
        const stringPrice = item.price
        const itemPrice = parseInt(stringPrice)
        const newTotalAmount = totalAmount - itemPrice
        console.log('new', newTotalAmount)
        setTotalAmount(newTotalAmount)
    }


    return (
        <CartContext.Provider value={{cart, updatedCart, addToCart, minusItem, addMoreItem, removeFromCart, totalAmount}}>
            {children}
        </CartContext.Provider>
    );
}; */