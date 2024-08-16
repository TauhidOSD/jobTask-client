import { Link } from "react-router-dom";


const NavBer = () => {
    return (
        <div className="flex justify-between lg:mb-8 md:mb-4 sm:mb-4">
           <div className=" flex justify-center items-center gap-2" >
            <img className=" w-10 rounded-sm" src="https://i.postimg.cc/wvSByzdP/handle-with-care-carton-box-packing-delivery-package-vector-713291-51.jpg" alt="" />
            <h2 className="font-semibold text-2xl ">Product</h2>
           </div>
            <div className="flex space-x-2 md:space-x-8 ml-8  justify-center items-center
            text-gray-600 	">
                <h2>Home</h2>
                <h2>Product</h2>
                <h2>Contact</h2>
            </div>
            <div className="flex justify-center items-center ">
            <Link to='/login'>
            <button className="border lg:py-2 md:py-2  lg:px-6 md:px-4 sm:px-2 sm:py-1  font-bold bg-yellow-50 rounded-md">Login</button>

            </Link>
            </div>
        </div>
    );
};

export default NavBer;