import { Link, useLoaderData } from "react-router-dom";

const ProductDetail = () => {

    const product = useLoaderData()
    const { _id, name, price, photo_url, detail } = product


    return (
        <div className="flex border-green-900 border-[2px] rounded-2xl p-5 gap-2 mb-10">
            <div>
                <img className="rounded-[12px]" src={photo_url} />
            </div>
            <div className="flex flex-col justify-center gap-4">
                <p className="text-5xl font-bold">{name}</p>
                <p>price: <span className="text-3xl">{price}</span>tk</p>
                <p>{detail}</p>
                <div>
                    <button className="bg-green-900 rounded-2xl text-yellow-500 font-bold px-2"><Link to={`/product-detail/${_id}`}>Buy</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;