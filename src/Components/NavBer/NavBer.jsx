import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <>
      <div className="md:navbar hidden  bg-base-100 shadow-sm container px-4 mx-auto">
        <div className="flex-1">
          <Link to="/" className="flex gap-2 items-center">
            <img
              className="w-auto h-[48px]"
              src="https://i.postimg.cc/8kxSTFKv/360-F-122726698-wz-Zycyye8-YAOlt-WUZf3f-KO0-H4-YB4cjx-O.jpg"
              alt=""
            />
            <span className="font-bold">Products</span>
          </Link>
        </div>
        <div></div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {/* <li className="font-bold">
              <Link to="/">Home</Link>
            </li> */}
            <li className="font-bold">
              <Link to="/products">Products</Link>
            </li>
            {!user && (
              <li className="font-bold rounded-md bg-green-300">
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>

          {user && (
            <div className="dropdown dropdown-end z-50">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div title={user?.displayName} className="w-10 rounded-full">
                  <img
                    referrerPolicy="no-referrer"
                    alt="User Profile Photo"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="mt-2">
                  <button
                    onClick={logOut}
                    className="bg-red-200 block text-center"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="md:hidden navbar bg-base-100 shadow-sm container px-4 mx-auto">
        <div className="flex-1">
          <Link to="/" className="flex gap-2 items-center">
            <img
              className="w-auto h-[48px]"
              src="https://i.postimg.cc/8kxSTFKv/360-F-122726698-wz-Zycyye8-YAOlt-WUZf3f-KO0-H4-YB4cjx-O.jpg"
              alt=""
            />
            <span className="font-bold">Products</span>
          </Link>
        </div>
        <div>
          
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {/* <liv className="font-bold">
              <Link to="/">Home</Link>
            </liv> */}
            <li className="font-bold">
              <Link to="/products">Products</Link>
            </li>
            {!user && (
              <li className="font-bold">
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>

          {user && (
            <div className="dropdown dropdown-end z-50">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div title={user?.displayName} className="w-10 rounded-full">
                  <img
                    referrerPolicy="no-referrer"
                    alt="User Profile Photo"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="mt-2">
                  <button
                    onClick={logOut}
                    className="bg-gray-200 block text-center"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navber;

// import { Link } from "react-router-dom";

// const NavBer = () => {
//     return (
//         <div className="flex justify-between lg:mb-8 md:mb-4 sm:mb-4">
//            <div className=" flex justify-center items-center gap-2" >
//             <img className=" w-10 rounded-sm" src="https://i.postimg.cc/wvSByzdP/handle-with-care-carton-box-packing-delivery-package-vector-713291-51.jpg" alt="" />
//             <h2 className="font-semibold text-2xl ">Product</h2>
//            </div>
//             <div className="flex space-x-2 md:space-x-8 ml-8  justify-center items-center
//             text-gray-600 	">
//                 <h2>Home</h2>
//                 <h2>Product</h2>
//                 <h2>Contact</h2>
//             </div>
//             <div className="flex justify-center items-center ">
//             <Link to='/login'>
//             <button className="border lg:py-2 md:py-2  lg:px-6 md:px-4 sm:px-2 sm:py-1  font-bold bg-yellow-50 rounded-md">Login</button>

//             </Link>
//             </div>
//         </div>
//     );
// };

// export default NavBer;
