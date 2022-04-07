
// import { categories } from "../../backend/db/categories";
import { topBrands } from "../../backend/db/topBrand";
import { CategoryCard, Footer, Hero, BrandCard, Loader } from "../../Component";
import { useCategories } from "../../Context";

import "./HomePage.css";

const HomePage = () => {
  const {categoriesData,status} = useCategories()
  // console.log(categories)
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
