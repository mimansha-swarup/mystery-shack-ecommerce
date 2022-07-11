import { v4 as uuid } from "uuid";
import { CartDetails } from "../../Component";
import { useAddress, useCart, useOrders } from "../../Context";
import { AddressProductCard } from "../../Component/Address/AddressProductCard";
import { useNavigate } from "react-router-dom";
import { cartTotalPrice } from "../../Helper/CartFunction";
import * as dayjs from 'dayjs'
import "../Cart/CartPage.css";
import "./checkout.css";

export const CheckoutPage = () => {
  const { cartState,clearCart } = useCart();
  const navigate = useNavigate();
  const { addressState } = useAddress();
  const { addOrder } = useOrders();
  const { defaultAddress } = addressState;
  const deliveryFees = 100;
  const cartValue = cartTotalPrice(cartState.data);
  const finalAmount = deliveryFees + cartValue;

     // Razorpay Integration

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;

            script.onload = () => {
                resolve(true)
            }

            script.onerror = () => {
                resolve(false);
            }

            document.body.appendChild(script);
        })
    };

    const displayRazorpay = async () => {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

        if (!res) {
            return;
        }
        const options = {
            key: "rzp_test_6LORrluZUq0S9E",
            amount: finalAmount * 100,
            currency: "INR",
            name: "",
            description: "Thanks for shopping with us!",
      
            handler: function (response) {
                const paymentId = response.razorpay_payment_id;
                const orderId = uuid();

                const newOrders = {
                    paymentId,
                    orderId,
                    amountPaid: finalAmount,
                    orderedProducts: [...cartState.data],
                    deliveryAddress: defaultAddress,
                    orderedAt: dayjs().format("DD/MM/YYYY hh:mmA"),
                };
                console.log("fired")
                addOrder(newOrders);
                clearCart();
                navigate("/order");
            },
            
            prefill: {
                name: "Mimansha Swarup",
                email: "mimanshaSwarup@example.com",
                contact: "9989545822",
            },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

  return (
    <main className="cart-container">
      <div className="flex flex-column checkout-box gap-1">
        <div className=" bg-black-03 text-black-01 flex flex-column checkout-address-box ">
          <div className="flex">
            <h4 className="headline4 bold text-purple-00 mb-1 ">1.</h4>
            <h4 className="headline4 bold text-white-00 ml-2 mb-0">
              DELIVERY ADDRESS
            </h4>
          </div>
          <address>
            <p className="body2 mb-0 mt-0">
              Deliver to{" "}
              <span className="text-black-00">
                {defaultAddress.name}, {defaultAddress.zipCode}
              </span>
            </p>
            <p className="body2 mb-0 mt-0">{defaultAddress.street}</p>
            <p className="body2 mb-0 mt-0">
              {`${defaultAddress.state},${defaultAddress.country} `}
            </p>
          </address>
        </div>
        <div className=" bg-black-03 text-black-01 flex flex-column checkout-address-box ">
          <div className="flex">
            <h4 className="headline4 bold text-purple-00 mb-1 ">2.</h4>
            <h4 className="headline4  bold text-white-00 ml-2 mb-1">
              ORDER SUMMARY
            </h4>
          </div>
          {cartState.data.map((product) => (
            <AddressProductCard key={product._id} product={product} />
          ))}
        </div>
        <div className=" bg-black-03 text-black-01 flex flex-column checkout-address-box ">
          <div className="flex">
            <h4 className="headline4 bold text-purple-00 mb-1 ">3.</h4>
            <h4 className="headline4  bold text-white-00 ml-2 mb-1">Payment</h4>
          </div>
          <button className="btn btn-contained teal" onClick={displayRazorpay} >Pay</button>
        </div>
      </div>
      <CartDetails />
    </main>
  );
};
