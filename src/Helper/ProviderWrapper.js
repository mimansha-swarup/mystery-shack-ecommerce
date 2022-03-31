import {
  FilterProvider,
  ProductsProvider,
  CategoriesProvider,
  AuthProvider,
  WishlistProvider,
  CartProvider,
} from "../Context";

const ProviderWrapper = ({ children }) => {
  return (
    <AuthProvider>
      <WishlistProvider>
        <CartProvider>
          <CategoriesProvider>
            <FilterProvider>
              <ProductsProvider>{children}</ProductsProvider>
            </FilterProvider>
          </CategoriesProvider>
        </CartProvider>
      </WishlistProvider>
    </AuthProvider>
  );
};

export default ProviderWrapper;
