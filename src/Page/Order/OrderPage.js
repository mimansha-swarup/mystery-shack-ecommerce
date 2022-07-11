import { Link } from "react-router-dom";
import { OrderCard } from "../../Component";
import { useOrders } from "../../Context";
import "./OrderPage.css";

export const OrderPage = () => {
  const { orderState } = useOrders();
  return (
    <main className="main-body">
      <div className="order-container mt-1 mb-2">
        <h3 className="headline3">My Orders</h3>

        <div className="order-layout">
          {orderState?.orders.length > 0 ? (
            orderState?.orders.map((eachOrders) => <OrderCard orderData={eachOrders} key={eachOrders.orderId} />)
          ) : (
            <div className="flex flex-column center mx-auto mt-3">
              {/* <img
            className="width-half mb-3 wishList-img"
            src={shopNowSVG}
            alt="empty bag"
          /> */}
              <h2 className="headline2 text-center">No Orders</h2>
              <h4 className="headline4 text-center">
                You haven't Bought Anything yet
              </h4>
              <Link to="/products">
                <button className="btn btn-contained purple">BUY NOW</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};
