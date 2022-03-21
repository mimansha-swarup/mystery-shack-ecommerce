
const CategoryCard = ({category}) => {
  const {coverImage,categoryName} = category
  return (
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
  );
};

export default CategoryCard;
