import { Link } from "react-router-dom";
import { NavBrandImg } from "../../assets";
import "./Navbar.css";
import { BsHeart, BsBag, BsSearch } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { useAuth, useCart, useFilters, useWishList } from "../../Context";
import { filterActions } from "../../Reducer/contant";
const Navbar = () => {

  const { filterState, filterDispatch } = useFilters();
  const { searchQuery } = filterState;
  const { authState, Logout } = useAuth();
  const { wishListState } = useWishList();
  const { cartState } = useCart();

  const getName = authState?.customer?.name
    ? authState?.customer?.name
    : "user";

  const firstName = getName.split(" ")[0];

  return (
    <header className="navbar">
      <Link to="/" className="navbar-brand">
        <img src={NavBrandImg} alt="navbrand" />
      </Link>

      <div className="drawer drawer-mob text-black-00">
        <AiOutlineUser className="drawer nav-icons" />

        <ul>
          <Link to={`/profile`}>
            <li className="headline4 text-white-00">
              {authState?.token ? `Hello, ${firstName}` : "Profile"}
            </li>
          </Link>
          <Link to="/cart">
            <li className="headline4 text-black-01">Cart</li>
          </Link>
          <Link to="/wishlist">
            <li className="headline4 text-black-01">Wishlist</li>
          </Link>
          <Link to="/address">
            <li className="headline4 text-black-01">Address</li>
          </Link>
          <Link to="/order">
            <li className="headline4 text-black-01">Orders</li>
          </Link>
          {authState?.isAuth ? (
            <li onClick={() => Logout()} className="headline4">
              Logout
            </li>
          ) : (
            <Link to="/login">
              <li className=" btn btn-outline purple semibold">Login</li>
            </Link>
          )}
        </ul>
      </div>

      <div className="search-box mr-3">
        <input
          type="text"
          name="search-box"
          id="search"
          placeholder="search"
          value={searchQuery}
          onChange={(event) =>
            filterDispatch({
              type: filterActions.SET_SEARCH_QUERY,
              payload: event.target.value,
            })
          }
        />
        <BsSearch className="nav-icons" />
      </div>
      <nav className="flex ">
        <Link className="flex" to="/wishlist">
          <div className=" mr-2 grey-color flex flex-column center">
            <div className="badge-wrapper">
              <BsHeart className="nav-icons" />
              {wishListState.data.length > 0 && (
                <div className="badge top-right red">
                  {wishListState.data.length}
                </div>
              )}
            </div>
          </div>
        </Link>

        <Link className="flex" to="/cart">
          <div className="mr-2 grey-color flex flex-column center">
            <div className=" grey-color badge-wrapper">
              <BsBag className="nav-icons" />
              {cartState?.data.length > 0 && (
                <div className="badge top-right red">
                  {cartState?.data.length}
                </div>
              )}
            </div>
          </div>
        </Link>

        <div className="drawer flex drawer-pc text-black-00">
          <div className="grey-color flex flex-column center">
            <div className="flex grey-color">
              <AiOutlineUser className="nav-icons" />
            </div>
          </div>
          <ul>
            <Link to={`/profile`}>
              <li className="headline4 text-white-00">
                {authState?.token ? `Hello, ${firstName}` : "Profile"}
              </li>
            </Link>
            <Link to="/cart">
              <li className="headline4 text-black-01">Cart</li>
            </Link>
            <Link to="/wishlist">
              <li className="headline4 text-black-01">Wishlist</li>
            </Link>
            <Link to="/address">
              <li className="headline4 text-black-01">Address</li>
            </Link>
            <Link to="/order">
              <li className="headline4 text-black-01">Orders</li>
            </Link>
            {authState?.isAuth ? (
              <li onClick={() => Logout()} className="headline4">
                Logout
              </li>
            ) : (
              <Link to="/login">
                <li className=" btn btn-outline purple semibold">Login</li>
              </Link>
            )}
          </ul>
        </div>
        {!authState?.isAuth && (
          <Link className="ml-1" to="/login">
            <button className="btn btn-outline purple semibold">Login</button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
