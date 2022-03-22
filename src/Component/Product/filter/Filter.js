const Filter = () => {
  return ( 
    <div className="sidebar">
    <div className="flex space-between">
      <p className="subtitle1 bold ">Filters</p>
      <p
        className="subtitle2 
            light"
      >
        Clear
      </p>
    </div>
    <hr className="line-horz" />
    <p className="hedline6  bold ">Sort By</p>
    <div className="flex ">
      <input type="radio" name="price" id="low-high" />
      <label htmlFor="low-high">Price: Low to High </label>
    </div>
    <div className="flex ">
      <input type="radio" name="price" id="high-low" />
      <label htmlFor="high-low">Price: High to Low </label>
    </div>
    <hr className="line-horz" />
    <p className="hedline6  bold ">Price</p>
    <input type="range" name="" className="slider" id="price-range" />

    <hr className="line-horz" />
    <p className="hedline6  bold ">Category</p>
    <div className="flex ">
      <input type="checkbox" name="tshirts" id="tshirts" />
      <label htmlFor="tshirts">T-Shirts </label>
    </div>

    <div className="flex ">
      <input type="checkbox" name="jeans" id="jeans" />
      <label htmlFor="jeans">Jeans </label>
    </div>
    <div className="flex ">
      <input type="checkbox" name="kurtas" id="kurtas" />
      <label htmlFor="kurtas">Kurtas </label>
    </div>
    <div className="flex ">
      <input type="checkbox" name="shoes" id="shoes" />
      <label htmlFor="shoes">Shoes </label>
    </div>
    <div className="flex ">
      <input type="checkbox" name="sarees" id="sarees" />
      <label htmlFor="sarees">Sarees </label>
    </div>
    <div className="flex ">
      <input type="checkbox" name="trousers" id="trousers" />
      <label htmlFor="trousers">Trousers </label>
    </div>
    <hr className="line-horz" />
    <p className="hedline6  bold ">Ratings</p>
    <div className="flex ">
      <input type="radio" name="star" id="5star" />
      <label htmlFor="5star">5 stars and above </label>
    </div>
    <div className="flex ">
      <input type="radio" name="star" id="4star" />
      <label htmlFor="4star">4 stars and above </label>
    </div>
    <div className="flex ">
      <input type="radio" name="star" id="3star" />
      <label htmlFor="3star">3 stars and above </label>
    </div>
    <div className="flex ">
      <input type="radio" name="star" id="2star" />
      <label htmlFor="2star">2 stars and above </label>
    </div>
    <div className="flex ">
      <input type="radio" name="star" id="1star" />
      <label htmlFor="1star">1 stars and above </label>
    </div>
    <hr className="line-horz" />
    
  </div>
   );
}
 
export default Filter;