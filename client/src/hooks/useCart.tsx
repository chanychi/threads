import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartState,
  selectTotalAmount,
  selectTotalQTY,
  setClearCartItems,
  setRemoveItemFromCart,
  setIncreaseItemQTY,
  setDecreaseItemQTY,
  setCloseCart,
  setOpenCart,
  setAddItemToCart,
  setGetTotals
} from "@/store/CartSlice.js";

interface ItemProps {
  id: number | string;
  title: string;
  text?: string;
  img?: string;
  color?: string;
  shadow?: string;
  price?: number | string;
  cartQuantity?: number;
}

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

  const onRemoveItem = (item: ItemProps) => {
    dispatch(setRemoveItemFromCart(item));
  }

  const onIncreaseItemQTY = (item: ItemProps) => {
    dispatch(setIncreaseItemQTY(item));
  }

  const onDecreaseItemQTY = (item: ItemProps) => {
    dispatch(setDecreaseItemQTY(item));
  }

  const onAddToCart = (item: ItemProps) => {
    dispatch(setAddItemToCart(item));
  };

  return {
    ifCartState,
    cartItems,
    totalAmount,
    totalQTY,
    onCartToggle,
    onClearCartItems,
    onRemoveItem,
    onIncreaseItemQTY,
    onDecreaseItemQTY,
    onAddToCart
  };
};

export default useCart;
