const Footer = () => {
    return (
        <>
        <div className="bg-green-900">
            <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center max-w-[1320px] m-auto py-10">
                <div className="flex flex-col justify-between">
                    <p className="text-3xl font-bold">Food App</p>
                    <p>www.foodapp.com</p>
                </div>
                <div className="flex gap-40">
                    <ul className="flex flex-col gap-4">
                        <li>Home</li>
                        <li>Products</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                    <ul className="flex flex-col gap-4">
                        <li>Home</li>
                        <li>Products</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>

                </div>
            </div>
        </div>
        </>
    );
};

export default Footer;