import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import './Products.css'
const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const { count } = useLoaderData();
  console.log(count);
  const numberOfPage = Math.ceil(count / itemsPerPage);
  //  const pages =[]
  //  for (let i =0; i < numberOfPage; i++){
  //   pages.push(i)
  //  }
  const pages = [...Array(numberOfPage).keys()];
  console.log(pages);

  useEffect(() => {
    fetch(`http://localhost:5000/products?page=${currentPage}&size=${itemsPerPage}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [currentPage,itemsPerPage]);

  const handleItemsPerPage = e => {
        const val =parseInt(e.target.value);
        console.log(val);
        setItemsPerPage(val);
        setCurrentPage(0);
        
  }

  const handlePrevPage = () =>{
    if(currentPage > 0){
      setCurrentPage(currentPage -1);
    }
  }

  const handleNextPage = () =>{
    if(currentPage < pages.length -1){
      setCurrentPage(currentPage + 1)
    }
  }


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

      <div className="pagination text-rose-500 text-center mb-40">
       <p className="font-semibold">Current page: {currentPage}</p>
        <button onClick={handlePrevPage}>Prev</button>
        {
          pages.map(page => <button className= "  px-2 gap-4 border-2 mr-2 bg-black text-white" 
            
            
            onClick={() => setCurrentPage(page)}
            key={page}
             >{page}</button>)
        }
        <button onClick={handleNextPage}>Next</button>
        <select className="bg-green-500" value={itemsPerPage} onChange={handleItemsPerPage} name="" id="">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
        </select>
      </div>
    </div>
  );
};

export default Products;
