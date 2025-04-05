import { addProduct } from "../Database/ProductProvider";

const ManageProducts = () => {

    const handleAddProduct = (e) =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const price = form.price.value
        const photo_url = form.url.value
        const detail = form.detail.value
        const product = { name, price, photo_url, detail }
        addProduct(product)
        form.reset()
    }


    return (
        <>
        <p className="text-5xl font-bold text-center pb-4">Admin Panel</p>
        <div className="flex flex-col justify-center items-center">
            <p className="text-3xl font-bold text-center pb-4">Add Product</p>
            <form className="bg-green-950 border-yellow-500 border-[1px]  rounded-2xl p-5" onSubmit={handleAddProduct}>
                <input className="bg-green-950 border-yellow-500 rounded-2xl border-[1px]  p-2 mb-2" type="url" name="url" placeholder="Add Photo URL" ></input>
                <br />
                <input className="bg-green-950 border-yellow-500 rounded-2xl border-[1px]  p-2 mb-2" type="text" name="name" placeholder="Add Product Name" required></input>
                <br />
                <input className="bg-green-950 border-yellow-500 rounded-2xl border-[1px] p-2 mb-2" type="text" name="price" placeholder="Add Price" required></input>
                <br />
                <input className="bg-green-950 border-yellow-500 rounded-2xl border-[1px] p-2 mb-2" type="text" name="detail" placeholder="Add details" required></input>
                <br />
                <button className="bg-green-950 border-yellow-500 rounded-2xl border-[1px] p-2" type="submit">Add Product</button>
            </form>
        </div>
        </>
    );
};

export default ManageProducts;