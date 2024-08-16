import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Products = () => {
   const [products, setProducts] = useState([]);
   const totalCount = useLoaderData();
   console.log(totalCount);
   
 

 useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className=" grid lg:grid-cols-3 lg:gap-6 md:grid-cols-2 md:gap-4 sm:grid-cols-1 sm:gap-4 space-y-4">
      {products.map((product) => (
        <div key={product._id} className="card bg-base-100  shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={product.productImage}
              alt="Shoes"
              className="rounded-xl  "
            />
          </figure>
          <div className="flex justify-between px-10">
            <h2 className="font-bold text-zinc-800">{product.productName}</h2>
            <h2 className="">{product.category}</h2>
          </div>
          <div>
            <h2 className="px-10">{product?.description}</h2>
          </div>
          <div className=" ">
            <div className="flex justify-between px-10 py-8">
              <h2 className="card-title">price: ${product.price}</h2>
              <p>{product?.ratings}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
