import { shopNowSVG } from "../../assets";
import { CartCard, CartDetails, Modal } from "../../Component";
import { useAddress, useCart } from "../../Context";
import { Link, useNavigate } from "react-router-dom";
import "./CartPage.css";
import { useState } from "react";
import { addressActions } from "../../Reducer/contant";

const CartPage = () => {
  const { cartState } = useCart();
  const { addressState, addressDispatch } = useAddress();
  const { defaultAddress } = addressState;
  const [isOpen, setIsOpen] = useState(false);
  const [warning, setWarning] = useState(false);
  const toggleIsOpen = () => setIsOpen((prev) => !prev);
  const navigate = useNavigate();

  const placeOrder = () => {
    if (defaultAddress?.state) {
      navigate("/checkout");
    } else {
      setWarning(true);
    }
  };

  return (
    <main className="cart-container">
      <Modal open={isOpen} onClose={toggleIsOpen}>
        <div className="flex flex-column">
          <Link className="mx-auto" to="/address">
            <button className="btn btn-outline purple mt-1 mb-1">
              Add New Address
            </button>
          </Link>
          <div className="flex flex-column gap-1">
            {addressState?.address.map((eachAddress) => (
              <address
                key={eachAddress?._id}
                id={eachAddress?._id}
                onClick={() => {
                  addressDispatch({
                    type: addressActions.SET_DEFAULT,
                    payload: eachAddress,
                  });
                  toggleIsOpen();
                }}
                className="address-holder pointer"
              >
                <div className="address-badge caption">{eachAddress?.type}</div>
                <span className="subtitle1 semibold">{eachAddress?.name}</span>

                <p className="body2 mb-0 text-black-01 ">
                  {eachAddress?.street}
                </p>
                <p className="body2 mt-0 text-black-01">
                  {`${eachAddress?.state}, ${eachAddress?.country}`} -{" "}
                  <span className="text-black-00">{eachAddress?.zipCode}</span>{" "}
                </p>
              </address>
            ))}
          </div>
        </div>
      </Modal>
      {cartState?.data.length > 0 ? (
        <>
          <div className="bg-black-03 text-black-01 flex ml-3 address-box-alone ">
            {defaultAddress?.state ? (
              <div>
                <p className="body2 mb-0 mt-0">
                  Deliver to{" "}
                  <span className="text-black-00">
                    {defaultAddress?.name}, {defaultAddress?.zipCode}
                  </span>
                </p>
                <p className="body2 mb-0 mt-0">
                  {`${defaultAddress?.state},${defaultAddress?.country} `}
                </p>
              </div>
            ) : (
              <h4 className="headline4 mb-0">ADD ADDRESS</h4>
            )}
            <button onClick={toggleIsOpen} className="btn">
              change
            </button>
          </div>
          <div className="cart-box">
            <div className="flex mt-1 ml-2 mb-1">
              <h5 className="headline5 mb-0 cart-text text-center">
                My Cart ({cartState.data.length})
              </h5>
              <div className="text-black-01 ml-3 flex address-box">
                {defaultAddress?.state ? (
                  <div>
                    <p className="body2 mb-0 mt-0">
                      Deliver to{" "}
                      <span className="text-black-00">
                        {defaultAddress.name}, {defaultAddress.zipCode}
                      </span>
                    </p>
                    <p className="body2 mb-0 mt-0">
                      {`${defaultAddress.state},${defaultAddress.country} `}
                    </p>
                  </div>
                ) : (
                  <h4 className="overline text-red-00 mb-0 bold">
                    ADD ADDRESS
                  </h4>
                )}
                <button onClick={toggleIsOpen} className="btn">
                  change
                </button>
              </div>
            </div>
            {cartState.data.map((product) => (
              <CartCard key={product._id} product={product} />
            ))}

            <div className="action">
              <button onClick={placeOrder} className="btn btn-contained teal">
                PLACE ORDER
              </button>
            </div>
          </div>
          <CartDetails />
          <Modal open={warning} onClose={() => setWarning(false)}>
            <>
              <h4 className="headline4 text-center  text-teal-01">Alert</h4>
              <hr className="line-horz bg-teal-01" />
              <p className="body1 mb-2 text-justify ">
                Please Enter a valid Address. Cannot place order without proper
                Address{" "}
              </p>
            </>
          </Modal>
        </>
      ) : (
        <div className="flex flex-column center mx-auto mt-3">
          <img
            className="width-half mb-3 wishList-img"
            src={shopNowSVG}
            alt="empty bag"
          />
          <h2 className="headline2 text-center">Empty Cart</h2>
          <h4 className="headline4 text-center">
            You have no items in your Cart. Start buying!
          </h4>
          <Link to="/products">
            <button className="btn btn-contained purple">BROWSE NOW</button>
          </Link>
        </div>
      )}
    </main>
  );
};

export default CartPage;
