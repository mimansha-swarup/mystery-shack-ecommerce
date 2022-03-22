import { Link } from "react-router-dom";
import { categories } from "../../backend/db/categories";
import { topBrands } from "../../backend/db/topBrand";
import { CategoryCard, Footer, Hero,BrandCard } from "../../Component";
import "./HomePage.css";

export const TopBrandCard = ({ title }) => {
  return (
    <div className="empty-lg flex center">
      <h1 clcassName="headline1 semi-bold">{title}</h1>
    </div>
  );
};

const HomePage = () => {
  return (
    <>
      <Hero />
      <main className="main-body">
        <h2 className="headline2">Category</h2>
        <div className="category-layout mb-3">
          {categories.map((category) => (
            <Link to="/products" >
            <CategoryCard key={category._id} category={category} />
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
