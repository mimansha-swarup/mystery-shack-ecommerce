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
      <label for="low-high">Price: Low to High </label>
    </div>
    <div className="flex ">
      <input type="radio" name="price" id="high-low" />
      <label for="high-low">Price: High to Low </label>
    </div>
    <hr className="line-horz" />
    <p className="hedline6  bold ">Price</p>
    <input type="range" name="" className="slider" id="price-range" />

    <hr className="line-horz" />
    <p className="hedline6  bold ">Category</p>
    <div className="flex ">
      <input type="checkbox" name="tshirts" id="tshirts" />
      <label for="tshirts">T-Shirts </label>
    </div>

    <div className="flex ">
      <input type="checkbox" name="jeans" id="jeans" />
      <label for="jeans">Jeans </label>
    </div>
    <div className="flex ">
      <input type="checkbox" name="kurtas" id="kurtas" />
      <label for="kurtas">Kurtas </label>
    </div>
    <div className="flex ">
      <input type="checkbox" name="shoes" id="shoes" />
      <label for="shoes">Shoes </label>
    </div>
    <div className="flex ">
      <input type="checkbox" name="sarees" id="sarees" />
      <label for="sarees">Sarees </label>
    </div>
    <div className="flex ">
      <input type="checkbox" name="trousers" id="trousers" />
      <label for="trousers">Trousers </label>
    </div>
    <hr className="line-horz" />
    <p className="hedline6  bold ">Ratings</p>
    <div className="flex ">
      <input type="radio" name="star" id="5star" />
      <label for="5star">5 stars and above </label>
    </div>
    <div className="flex ">
      <input type="radio" name="star" id="4star" />
      <label for="4star">4 stars and above </label>
    </div>
    <div className="flex ">
      <input type="radio" name="star" id="3star" />
      <label for="3star">3 stars and above </label>
    </div>
    <div className="flex ">
      <input type="radio" name="star" id="2star" />
      <label for="2star">2 stars and above </label>
    </div>
    <div className="flex ">
      <input type="radio" name="star" id="1star" />
      <label for="1star">1 stars and above </label>
    </div>
    <hr className="line-horz" />
    
  </div>
   );
}
 
export default Filter;