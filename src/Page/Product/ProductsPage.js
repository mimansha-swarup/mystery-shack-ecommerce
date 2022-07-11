import "./ProductsPage.css";
import { Filter, Loader, ProductCard } from "../../Component";
import { useAuth, useFilters, useProducts } from "../../Context";
import { useState } from "react";
import {
  
  filterByCategory,
  filterByPrice,
  filterByRating,
  searchByName,
  sortbyPrice,
} from "../../Helper/FilterFunction";

import { AiOutlineClose,AiOutlineMenuFold } from "react-icons/ai";
import { Navigate } from "react-router-dom";

const ProductsPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { filterState } = useFilters();

  const { products, status } = useProducts();
  const { authState } = useAuth();
  const handleFilterOpen = () => {
    setIsFilterOpen((prevIsFilterOpen) => (prevIsFilterOpen ? false : true));
  };
  const { sortBy,  maxPrice, rating, searchQuery, category } =
    filterState;

  const sortedList = sortbyPrice(products, sortBy);
  const priceList = filterByPrice(sortedList, maxPrice);
  const categoryList = filterByCategory(priceList, category);
  const searchedList = searchByName(categoryList, searchQuery);
  const filteredList = filterByRating(searchedList, rating);

  if(!authState?.token) return <Navigate to="/login" replace />

  return (
    <main className="filter-pg mt-2">
      <div className="display-none">
        <Filter />
      </div>
      <div className="product-Container">
        <div className="flex space-between">
          <p className="subtitle1">

          Results <span className="grey-text overline">({filteredList.length} items)</span>
          </p>
          <button className="btn filter-btn" onClick={handleFilterOpen}>
            Filters { isFilterOpen ? <AiOutlineClose className="vertical-aligin-middle" />  : <AiOutlineMenuFold className="vertical-aligin-middle" />}
          </button>
          {isFilterOpen && (
            <div className="absolute-sidebar">
              <Filter />
            </div>
          )}
        </div>
        {status.error && (
          <div className="headline1 text-color-01">{status.error}</div>
        )}
        {status.isLoading ? (
          <Loader/>
        ) : (
          <div className="product-layout mt-1">
            {filteredList.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default ProductsPage;
