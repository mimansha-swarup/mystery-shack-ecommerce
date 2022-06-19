
import { useEffect } from "react";
import { topBrands } from "../../backend/db/topBrand";
import { CategoryCard, Footer, Hero, BrandCard, Loader } from "../../Component";
import { useCategories, useFilters } from "../../Context";
import { filterActions } from "../../Reducer/contant";

import "./HomePage.css";

const HomePage = () => {
  const {categoriesData,status} = useCategories()
  const { filterDispatch } = useFilters();
  useEffect(
    ()=>{
      filterDispatch({
        type: filterActions.CLEAR,
      })
    },[]
  )

  return (
    <>
      <Hero />
      <main className="main-body">
        <h2 className="headline2">Category</h2>
        <div className="category-layout mb-3">
          {status.error && <p>status.error</p> }
          {status.isLoading?<Loader/>:categoriesData.map((category) => (
            <CategoryCard
              key={category._id}
              category={category}
            />
          ))}
        </div>
        <h2 className="headline2">Top Brands</h2>
        <div className="brand-layout mb-3">
          {topBrands.map((brand) => (
            <BrandCard key={brand._id} brand={brand} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
