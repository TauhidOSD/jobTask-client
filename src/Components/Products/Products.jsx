import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const data = useLoaderData();
  const { count } = data || {};
  
  // Ensure count is a valid number
  const validCount = Number.isInteger(count) && count > 0 ? count : 0;
  
  // Calculate number of pages and ensure it is valid
  const numberOfPage = Math.max(0, Math.ceil(validCount / itemsPerPage));
  const pages = numberOfPage > 0 ? [...Array(numberOfPage).keys()] : [];
  
  useEffect(() => {
    fetch(`http://localhost:5000/products?page=${currentPage}&size=${itemsPerPage}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, [currentPage, itemsPerPage]);

  const handleItemsPerPage = (e) => {
    const val = parseInt(e.target.value, 10);
    setItemsPerPage(val > 0 ? val : 10); // Default to 10 if invalid
    setCurrentPage(0);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="grid lg:grid-cols-3 lg:gap-6 md:grid-cols-2 md:gap-4 sm:grid-cols-1 sm:gap-4 space-y-4">
      {products.map((product) => (
        <div key={product._id} className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={product.productImage}
              alt={product.productName}
              className="rounded-xl"
            />
          </figure>
          <div className="flex justify-between px-10">
            <h2 className="font-bold text-zinc-800">{product.productName}</h2>
            <h2>{product.category}</h2>
          </div>
          <div>
            <h2 className="px-10">{product.description}</h2>
          </div>
          <div className="flex justify-between px-10 py-8">
            <h2 className="card-title">Price: ${product.price}</h2>
            <p>{product.ratings}</p>
          </div>
        </div>
      ))}
        
      <div className="pagination text-rose-500 text-center mb-40">
        <p className="font-semibold">Current page: {currentPage + 1}</p>
        <button className="font-bold mr-4"
          onClick={handlePrevPage}
          disabled={currentPage === 0}
        >
          Prev 
          
        </button>
        {pages.map((page) => (
          <button
            key={page}
            className={`px-2 gap-4 border-2 mr-2 ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-black text-white'}`}
            onClick={() => setCurrentPage(page)}
          >
            {page + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          disabled={currentPage === pages.length - 1}
        >
          Next
        </button>
        <select
          className="bg-green-500"
          value={itemsPerPage}
          onChange={handleItemsPerPage}
        >
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
