const BrandCard = ({brand}) => {
  const {brandName,brandImage} = brand
  return (
    <div className="brand-card card mb-2">
      <div className="media-cont">
        <img src={brandImage} alt="brandImage" className="card-media" />
      </div>
      <div className="card-header">
        <h2 className="headline2 semi-bold text-center">{brandName}</h2>
      </div>
    </div>
  );
};

export default BrandCard;
