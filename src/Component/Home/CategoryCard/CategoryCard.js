import { Link } from "react-router-dom";
import { useFilters } from "../../../Context";
import { filterActions } from "../../../Reducer/contant";


const CategoryCard = ({ category }) => {
  const { coverImage, categoryName } = category;
  
  const { filterDispatch } = useFilters();
  return (
    <Link to="/products" onClick={() =>
      filterDispatch({
        type: filterActions.SET_CATEGORY,
        payload: category.categoryName,
      })
    } >
      <div className="category-card card">
        <div className="media-cont">
          <img
            src={coverImage}
            alt="categoryImage"
            className="card-media img-round"
          />
        </div>
        <div className="card-header">
          <h4 className="headline4 text-center">{categoryName}</h4>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
