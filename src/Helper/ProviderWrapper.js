import {
  FilterProvider,
  ProductsProvider,
  CategoriesProvider,
  AuthProvider,
  WishlistProvider,
} from "../Context";

const ProviderWrapper = ({ children }) => {
  return (
    <AuthProvider>
      <WishlistProvider>
        <CategoriesProvider>
          <FilterProvider>
            <ProductsProvider>{children}</ProductsProvider>
          </FilterProvider>
        </CategoriesProvider>
      </WishlistProvider>
    </AuthProvider>
  );
};

export default ProviderWrapper;
