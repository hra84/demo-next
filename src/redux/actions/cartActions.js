import { CART } from "../defines";

export const addToCart = (product, quantity, color, size) => ({
  type: CART.ADD_TO_CART,
  product,
  quantity,
  color,
  size,
});

export const removeFromCart = (cartId) => ({
  type: CART.REMOVE_FROM_CART,
  cartId,
});

export const removeAllFromCart = () => ({
  type: CART.REMOVE_ALL_FROM_CART,
});

export const decreaseQuantityCart = (cartId) => ({
  type: CART.DECREASE_QUANTITY_CART,
  cartId,
});

export const increaseQuantityCart = (cartId) => ({
  type: CART.INCREASE_QUANTITY_CART,
  cartId,
});
