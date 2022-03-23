export const sortbyPrice = (listData, sortType) =>
  sortType === "PRICE_HIGH_TO_LOW"
    ? [...listData].sort((a, b) => b.price - a.price)
    : sortType === "PRICE_LOW_TO_HIGH"
    ? [...listData].sort((a, b) => a.price - b.price)
    : listData;

export const displayinStock = (listData, showInventoryAll) =>
  listData.filter((product) =>
    showInventoryAll ? product : product.inStock === true
  );

export const filterByPrice = (listData, maxPrice) =>
  listData.filter((product) => product.price <= maxPrice);

export const filterByRating = (listData, rating) =>
  listData.filter((product) => product.rating <= rating);

export const searchByName = (listData, searchQuery) =>
  listData.filter((product) =>
    product.productName.toLowerCase().includes(searchQuery)
  );
export const filterByCategory = (listData, categories) =>
  categories.length > 0
    ? categories
        .map((category) =>
          listData.filter((product) => product.categoryName === category)
        )
        .flat()
    : listData;

