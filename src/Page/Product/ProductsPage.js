import "./ProductsPage.css";
import { Filter, ProductCard } from "../../Component";
import { products } from "../../backend/db/products";
import { useState } from "react";

const ProductsPage = () => {
  const [isFilterOpen,setIsFilterOpen] = useState(false)
  const handleFilterOpen =() =>{
    setIsFilterOpen(prevIsFilterOpen => prevIsFilterOpen?false:true)
  }
  return (
    <main className="filter-pg mt-2"><div className="display-none" >
      <Filter  />

    </div>
      <div
      className="product-Container"
      >
        <div className="flex space-between">

        Products
        <button className="btn" onClick={handleFilterOpen} >Filters</button>
        {
          isFilterOpen && <div className="absolute-sidebar">
      <Filter  />

          </div>
        }
        </div>
        <div className="product-layout mt-1">
          {products.map((product) => (
            <ProductCard key={product._id}  product={product} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
