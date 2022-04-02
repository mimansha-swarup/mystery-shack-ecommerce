import {
  FilterProvider,
  ProductsProvider,
  CategoriesProvider,
  AuthProvider,
  WishlistProvider,
  CartProvider,
  ToastProvider,
} from "../Context";

const ProviderWrapper = ({ children }) => {
  return (
    <ToastProvider>
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
    </ToastProvider>
  );
};

export default ProviderWrapper;
