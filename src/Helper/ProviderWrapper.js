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
        <WishlistProvider>
          <CartProvider>
            <CategoriesProvider>
              <FilterProvider>
                <AddressProvider>
                  <OrdersProvider>
                    <ProductsProvider>{children}</ProductsProvider>
                  </OrdersProvider>
                </AddressProvider>
              </FilterProvider>
            </CategoriesProvider>
          </CartProvider>
        </WishlistProvider>
      </AuthProvider>
    </ToastProvider>
  );
};

export default ProviderWrapper;
