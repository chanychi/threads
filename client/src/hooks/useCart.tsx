import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartState,
  selectTotalAmount,
  selectTotalQTY,
  setClearCartItems,
  setCloseCart,
  setOpenCart,
  setGetTotals
} from "@/store/CartSlice.js";

const useCart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQTY = useSelector(selectTotalQTY);

  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItems, dispatch]);

  const onCartToggle = () => {
    if (ifCartState) {
      dispatch(setCloseCart());
    } else {
      dispatch(setOpenCart(true));
    }
  };

  const onClearCartItems = () => {
    dispatch(setClearCartItems());
  };

  return {
    ifCartState,
    cartItems,
    totalAmount,
    totalQTY,
    onCartToggle,
    onClearCartItems
  };
};

export default useCart;
