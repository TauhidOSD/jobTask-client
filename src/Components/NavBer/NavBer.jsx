

const NavBer = () => {
    return (
        <div className="flex justify-between ">
           <div className=" w-10 flex justify-center items-center gap-2" >
            <img src="https://i.postimg.cc/wvSByzdP/handle-with-care-carton-box-packing-delivery-package-vector-713291-51.jpg" alt="" />
            <h2 className="font-semibold text-2xl ">Product</h2>
           </div>
            <div className="flex space-x-2 md:space-x-8 ml-8 justify-center items-center
            text-gray-600 	">
                <h2>Home</h2>
                <h2>Product</h2>
                <h2>Contact</h2>
            </div>
            <div className="flex justify-center items-center ">
               <button className="border py-2 px-6 font-bold bg-yellow-50 rounded-md">Login</button>
            </div>
        </div>
    );
};

export default NavBer;