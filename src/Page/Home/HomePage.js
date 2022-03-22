import { Link } from "react-router-dom";
import { categories } from "../../backend/db/categories";
import { topBrands } from "../../backend/db/topBrand";
import { CategoryCard, Footer, Hero,BrandCard } from "../../Component";
import "./HomePage.css";


const HomePage = () => {
  return (
    <>
      <Hero />
      <main className="main-body">
        <h2 className="headline2">Category</h2>
        <div className="category-layout mb-3">
          {categories.map((category) => (
            <Link key={category._id} to="/products" >
            <CategoryCard  category={category} />
            </Link>
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
