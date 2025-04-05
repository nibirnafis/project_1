import { createContext, useEffect, useState } from "react";


export const addProduct = async(product) =>{
    await fetch('https://project-1-back-end-7lux.onrender.com/add-product', {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(product)
    }).then(res => res.json())
    // .then(data => console.log(data))
}




export const ProductsContext = createContext(null)

const ProductProvider = ({children}) => {

    const [ products, setProducts ] = useState([])
    
     useEffect(()=> {
        getData()
    }, [])


    async function getData(){
        const responce = await fetch('https://project-1-back-end-7lux.onrender.com/all-products', {
            method: 'GET'
        })
        const data = await responce.json()
        setProducts(data)
    }


    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductProvider;