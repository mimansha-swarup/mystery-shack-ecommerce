import { useFilters } from "../../../Context";
import { filterActions } from "../../../Reducer/contant";

const Filter = () => {
  const { filterState, filterDispatch } = useFilters();
  const { sortBy, showInventoryAll, maxPrice, rating, category } = filterState;
  return (
    <div className="sidebar">
      <div className="flex space-between">
        <p className="subtitle1 bold ">Filters</p>
        <button
          className="subtitle2 
            light btn"
          onClick={() => filterDispatch({ type: filterActions.CLEAR })}
        >
          Clear
        </button>
      </div>
      <hr className="line-horz" />
      {/* sort on basis of price */}
      <p className="hedline6  bold ">Sort By</p>
      <div className="flex ">
        <input
          type="radio"
          name="price"
          id="low-high"
          checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"}
          onChange={() =>
            filterDispatch({
              type: filterActions.SORT,
              payload: "PRICE_LOW_TO_HIGH",
            })
          }
        />
        <label htmlFor="low-high">Price: Low to High </label>
      </div>
      <div className="flex ">
        <input
          type="radio"
          name="price"
          id="high-low"
          checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}
          onChange={() =>
            filterDispatch({
              type: filterActions.SORT,
              payload: "PRICE_HIGH_TO_LOW",
            })
          }
        />
        <label htmlFor="high-low">Price: High to Low </label>
      </div>
      <hr className="line-horz" />
      {/* show on basis of Availability */}
      {/* TODO: will implement Later */}
      {/* <p className="hedline6  bold ">Availability</p>
      <div className="flex ">
        <input
          type="checkbox"
          name="outofstock"
          id="out-of-stock"
          checked={showInventoryAll}
          onChange={() =>
            filterDispatch({
              type: filterActions.TOGGLE_OUT_OF_STOCK,
            })
          }
        />
        <label htmlFor="out-of-stock">Show Out Of Stock </label>
      </div>

      <hr className="line-horz" /> */}
      {/* Filter according to price range */}
      <p className="hedline6  bold ">Price</p>
      <div className="flex space-between">
        <span className="small-text text-green-01">0</span>
        <span className="small-text text-green-01">250</span>
        <span className="small-text text-green-01">500</span>
        <span className="small-text text-green-01">750</span>
        <span className="small-text text-green-01">1000</span>
      </div>
      <input
        type="range"
        name="slider"
        className="slider"
        id="price-range"
        min="0"
        max="1000"
        step="250"
        value={maxPrice}
        onChange={(event) =>
          filterDispatch({
            type: filterActions.SET_PRICE_RANGE,
            payload: event.target.value,
          })
        }
      />

      <hr className="line-horz" />

      {/* Todo: Filter by Category  */}
      <p className="hedline6  bold ">Category</p>
      <div className="flex ">
        <input
          type="checkbox"
          name="T-Shirts"
          id="tshirts"
          checked={category.includes("T-Shirts")}
          onChange={(event) =>
            filterDispatch({
              type: filterActions.SET_CATEGORY,
              payload: event.target.name,
            })
          }
        />
        <label htmlFor="tshirts">T-Shirts </label>
      </div>

      <div className="flex ">
        <input
          type="checkbox"
          name="Jeans"
          id="jeans"
          checked={category.includes("Jeans")}
          onChange={(event) =>
            filterDispatch({
              type: filterActions.SET_CATEGORY,
              payload: event.target.name,
            })
          }
        />
        <label htmlFor="jeans">Jeans </label>
      </div>
      <div className="flex ">
        <input
          type="checkbox"
          name="Kurtas"
          id="kurtas"
          checked={category.includes("Kurtas")}
          onChange={(event) =>
            filterDispatch({
              type: filterActions.SET_CATEGORY,
              payload: event.target.name,
            })
          }
        />
        <label htmlFor="kurtas">Kurtas </label>
      </div>
      <div className="flex ">
        <input
          type="checkbox"
          name="Shoes"
          id="shoes"
          checked={category.includes("Shoes")}
          onChange={(event) =>
            filterDispatch({
              type: filterActions.SET_CATEGORY,
              payload: event.target.name,
            })
          }
        />
        <label htmlFor="shoes">Shoes </label>
      </div>
      <div className="flex ">
        <input
          type="checkbox"
          name="Sarees"
          id="sarees"
          checked={category.includes("Sarees")}
          onChange={(event) =>
            filterDispatch({
              type: filterActions.SET_CATEGORY,
              payload: event.target.name,
            })
          }
        />
        <label htmlFor="sarees">Sarees </label>
      </div>
      <div className="flex ">
        <input
          type="checkbox"
          name="Trousers"
          id="trousers"
          checked={category.includes("Trousers")}
          onChange={(event) =>
            filterDispatch({
              type: filterActions.SET_CATEGORY,
              payload: event.target.name,
            })
          }
        />
        <label htmlFor="trousers">Trousers </label>
      </div>
      <hr className="line-horz" />

      {/* Filter By Rating */}

      <p className="hedline6  bold ">Ratings</p>
      <div className="flex ">
        <input
          type="radio"
          name="star"
          id="5star"
          checked={rating === 5}
          onChange={() =>
            filterDispatch({ type: filterActions.SET_RATING, payload: 5 })
          }
        />
        <label htmlFor="5star">5 stars and below </label>
      </div>
      <div className="flex ">
        <input
          type="radio"
          name="star"
          id="4star"
          checked={rating === 4}
          onChange={() =>
            filterDispatch({ type: filterActions.SET_RATING, payload: 4 })
          }
        />
        <label htmlFor="4star">4 stars and below </label>
      </div>
      <div className="flex ">
        <input
          type="radio"
          name="star"
          id="3star"
          checked={rating === 3}
          onChange={() =>
            filterDispatch({ type: filterActions.SET_RATING, payload: 3 })
          }
        />
        <label htmlFor="3star">3 stars and below </label>
      </div>
      <div className="flex ">
        <input
          type="radio"
          name="star"
          id="2star"
          checked={rating === 2}
          onChange={() =>
            filterDispatch({ type: filterActions.SET_RATING, payload: 2 })
          }
        />
        <label htmlFor="2star">2 stars and below </label>
      </div>
      <div className="flex ">
        <input
          type="radio"
          name="star"
          id="1star"
          checked={rating === 1}
          onChange={() =>
            filterDispatch({ type: filterActions.SET_RATING, payload: 1 })
          }
        />
        <label htmlFor="1star">1 stars and below </label>
      </div>
      <hr className="line-horz" />
    </div>
  );
};

export default Filter;
