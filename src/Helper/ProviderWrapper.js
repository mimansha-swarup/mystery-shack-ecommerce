import {
  FilterProvider,
  ProductsProvider,
  CategoriesProvider,
  AuthProvider,
  WishlistProvider,
  CartProvider,
  ToastProvider,
  AddressProvider,
  OrdersProvider,
} from "../Context";

const ProviderWrapper = ({ children }) => {
  return (
    <ToastProvider>
      <AuthProvider>
        <OrdersProvider>
          <WishlistProvider>
            <CartProvider>
              <CategoriesProvider>
                <FilterProvider>
                  <AddressProvider>
                    <ProductsProvider>{children}</ProductsProvider>
                  </AddressProvider>
                </FilterProvider>
              </CategoriesProvider>
            </CartProvider>
          </WishlistProvider>
        </OrdersProvider>
      </AuthProvider>
    </ToastProvider>
  );
};

export default ProviderWrapper;
