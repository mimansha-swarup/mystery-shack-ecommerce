import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { WishlistReduce } from "../Reducer/wishListReducer";
import axios from "axios";
import { wishlistApi } from "../Helper/Api/api";
import { wishListActions } from "../Reducer/contant";
import { useAuth } from "./authContext";
import { useToast } from "./toastContext";
const wishListContext = createContext();

export const useWishList = () => useContext(wishListContext);

export const WishlistProvider = ({ children }) => {
  const [wishlistArray, setWishlistArray] = useState([]);
  const { authState } = useAuth();
  const {setToastData} = useToast()

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(wishlistApi, {
          headers: { authorization: authState.token },
        });
        console.log(response)
        if (response.status === 200) setWishlistArray(response.data.wishlist);
      } catch (error) {
        setToastData(prevToastData=>[...prevToastData,{type:"error",message:error.message}])
        console.log("error in fetcing useState",error.message)
      }
    })();
  }, []);

  const [wishListState, wishListDispatch] = useReducer(WishlistReduce, {
    data: wishlistArray,
  });

  const SaveToWishList = async (token, product, wishListDispatch) => {

    try {
      const response = await axios.post(
        wishlistApi,
        { product },
        { headers: { authorization: token } }
      );
      if (response.status === 201) {
        wishListDispatch({
          type: wishListActions.ADD,
          payload: product,
        });
        setToastData(prevToastData=>[...prevToastData,{type:"success",message:"Product added to Wishlist Successfully!!"}])
      }
    } catch (error) {
      setToastData(prevToastData=>[...prevToastData,{type:"error",message:error.message}])
      console.log("error from wishList Func \n", error.message);
    }
  };
  
  const RemoveFromWishList = async (token, product, wishListDispatch) => {

    try {
      const response = await axios.delete(
        wishlistApi + "/" + String(product._id),
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (response.status === 200) {
        wishListDispatch({ type: wishListActions.REMOVE, payload: product });
        setToastData(prevToastData=>[...prevToastData,{type:"success",message:"Product removed from Wishlist Successfully!!"}])

      }
    } catch (error) {
      setToastData(prevToastData=>[...prevToastData,{type:"error",message:error.message}])
      console.log("error from wishList Func", error.message);
    }
  };

  return (
    <wishListContext.Provider
      value={{
        wishListState,
        wishListDispatch,
        SaveToWishList,
        RemoveFromWishList,
      }}
    >
      {children}
    </wishListContext.Provider>
  );
};
