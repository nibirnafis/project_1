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
        <div>
            <p className="text-4xl font-bold text-center pb-4">Admin Panel</p>
            <form  onSubmit={handleAddProduct}>
                <input type="url" name="url" placeholder="Add Photo URL" ></input>
                <br />
                <input type="text" name="name" placeholder="Add Product Name" required></input>
                <br />
                <input type="text" name="price" placeholder="Add Price" required></input>
                <br />
                <input type="text" name="detail" placeholder="Add details" required></input>
                <br />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default ManageProducts;