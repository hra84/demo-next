import { v4 as uuidv4 } from "uuid";

import { CART } from "../defines";

const initialState = [];

export default function cartReducer(state = initialState, action) {
  const cartItem = state.find((item) => item.cartId === action.cartId);
  const cartItemIndex = cartItem && state.indexOf(cartItem);
  switch (action.type) {
    case CART.ADD_TO_CART:
      const pVaration =
        action.product.variation ||
        (action.product.variation && action.product.variation.length > 0);
      const pSize =
        action.product.size ||
        (action.product.size && action.product.size.length > 0);
      if (!pVaration && !pSize) {
        const addedCartItem = state.find(
          (item) => item.id === action.product.id
        );
        const addedCartItemIndex =
          addedCartItem && state.indexOf(addedCartItem);
        if (!addedCartItem) {
          return [
            ...state,
            {
              ...action.product,
              cartQuantity: action.quantity || 1,
              cartId: uuidv4(),
            },
          ];
        } else {
          return [
            ...state.slice(0, addedCartItemIndex),
            {
              ...addedCartItem,
              cartQuantity: action.quantity
                ? addedCartItem.cartQuantity + action.quantity
                : addedCartItem.cartQuantity + 1,
            },
            ...state.slice(addedCartItemIndex + 1),
          ];
        }
      } else {
        if (pVaration && !pSize) {
          const addedCartItemColor = state.find(
            (item) =>
              item.id === action.product.id &&
              item.selectedColor &&
              item.selectedColor === action.color
          );
          const addedCartItemColorIndex =
            addedCartItemColor && state.indexOf(addedCartItemColor);
          if (!action.color || action.color === "none") {
            if (!addedCartItemColor) {
              return [
                ...state,
                {
                  ...action.product,
                  selectedColor: "none",
                  cartQuantity: action.quantity || 1,
                  cartId: uuidv4(),
                },
              ];
            } else {
              return [
                ...state.slice(0, addedCartItemColorIndex),
                {
                  ...addedCartItemColor,
                  cartQuantity: action.quantity
                    ? addedCartItemColor.cartQuantity + action.quantity
                    : addedCartItemColor.cartQuantity + 1,
                },
                ...state.slice(addedCartItemColorIndex + 1),
              ];
            }
          } else {
            if (!addedCartItemColor) {
              return [
                ...state,
                {
                  ...action.product,
                  cartQuantity: action.quantity || 1,
                  selectedColor: action.color,
                  cartId: uuidv4(),
                },
              ];
            } else {
              return [
                ...state.slice(0, addedCartItemColorIndex),
                {
                  ...addedCartItemColor,
                  cartQuantity: action.quantity
                    ? addedCartItemColor.cartQuantity + action.quantity
                    : addedCartItemColor.cartQuantity + 1,
                },
                ...state.slice(addedCartItemColorIndex + 1),
              ];
            }
          }
        } else if (!pVaration && pSize) {
          const addedCartItemSize = state.find(
            (item) =>
              item.id === action.product.id &&
              item.selectedSize &&
              item.selectedSize === action.size
          );
          const addedCartItemSizeIndex =
            addedCartItemSize && state.indexOf(addedCartItemSize);
          if (!action.size || action.size === "none") {
            if (!addedCartItemSize) {
              return [
                ...state,
                {
                  ...action.product,
                  selectedSize: "none",
                  cartQuantity: action.quantity || 1,
                  cartId: uuidv4(),
                },
              ];
            } else {
              return [
                ...state.slice(0, addedCartItemSizeIndex),
                {
                  ...addedCartItemSize,
                  cartQuantity: action.quantity
                    ? addedCartItemSize.cartQuantity + action.quantity
                    : addedCartItemSize.cartQuantity + 1,
                },
                ...state.slice(addedCartItemSizeIndex + 1),
              ];
            }
          } else {
            if (!addedCartItemSize) {
              return [
                ...state,
                {
                  ...action.product,
                  cartQuantity: action.quantity || 1,
                  selectedSize: action.size,
                  cartId: uuidv4(),
                },
              ];
            } else {
              return [
                ...state.slice(0, addedCartItemSizeIndex),
                {
                  ...addedCartItemSize,
                  cartQuantity: action.quantity
                    ? addedCartItemSize.cartQuantity + action.quantity
                    : addedCartItemSize.cartQuantity + 1,
                },
                ...state.slice(addedCartItemSizeIndex + 1),
              ];
            }
          }
        } else if (pVaration && pSize) {
          const addedCartItemSizeColor = state.find(
            (item) =>
              item.id === action.product.id &&
              item.selectedSize &&
              item.selectedSize === action.size &&
              item.selectedColor &&
              item.selectedColor === action.color
          );
          const addedCartItemSizeColorIndex =
            addedCartItemSizeColor && state.indexOf(addedCartItemSizeColor);
          if (
            (!action.color || action.color === "none") &&
            (!action.size || action.size === "none")
          ) {
            if (!addedCartItemSizeColor) {
              return [
                ...state,
                {
                  ...action.product,
                  selectedColor: "none",
                  selectedSize: "none",
                  cartQuantity: action.quantity || 1,
                  cartId: uuidv4(),
                },
              ];
            } else {
              return [
                ...state.slice(0, addedCartItemSizeColorIndex),
                {
                  ...addedCartItemSizeColor,
                  cartQuantity: action.quantity
                    ? addedCartItemSizeColor.cartQuantity + action.quantity
                    : addedCartItemSizeColor.cartQuantity + 1,
                },
                ...state.slice(addedCartItemSizeColorIndex + 1),
              ];
            }
          } else if (action.color && (!action.size || action.size === "none")) {
            if (!addedCartItemSizeColor) {
              return [
                ...state,
                {
                  ...action.product,
                  cartQuantity: action.quantity || 1,
                  selectedColor: action.color,
                  selectedSize: "none",
                  cartId: uuidv4(),
                },
              ];
            } else {
              return [
                ...state.slice(0, addedCartItemSizeColorIndex),
                {
                  ...addedCartItemSizeColor,
                  cartQuantity: action.quantity
                    ? addedCartItemSizeColor.cartQuantity + action.quantity
                    : addedCartItemSizeColor.cartQuantity + 1,
                },
                ...state.slice(addedCartItemSizeColorIndex + 1),
              ];
            }
          } else if (
            action.size &&
            (!action.color || action.color === "none")
          ) {
            if (!addedCartItemSizeColor) {
              return [
                ...state,
                {
                  ...action.product,
                  cartQuantity: action.quantity || 1,
                  selectedColor: "none",
                  selectedSize: action.size,
                  cartId: uuidv4(),
                },
              ];
            } else {
              return [
                ...state.slice(0, addedCartItemSizeColorIndex),
                {
                  ...addedCartItemSizeColor,
                  cartQuantity: action.quantity
                    ? addedCartItemSizeColor.cartQuantity + action.quantity
                    : addedCartItemSizeColor.cartQuantity + 1,
                },
                ...state.slice(addedCartItemSizeColorIndex + 1),
              ];
            }
          } else {
            if (!addedCartItemSizeColor) {
              return [
                ...state,
                {
                  ...action.product,
                  cartQuantity: action.quantity || 1,
                  selectedColor: action.color,
                  selectedSize: action.size,
                  cartId: uuidv4(),
                },
              ];
            } else {
              return [
                ...state.slice(0, addedCartItemSizeColorIndex),
                {
                  ...addedCartItemSizeColor,
                  cartQuantity: action.quantity
                    ? addedCartItemSizeColor.cartQuantity + action.quantity
                    : addedCartItemSizeColor.cartQuantity + 1,
                },
                ...state.slice(addedCartItemSizeColorIndex + 1),
              ];
            }
          }
          return;
        }
      }
    case CART.REMOVE_FROM_CART:
      return [
        ...state.slice(0, cartItemIndex),
        ...state.slice(cartItemIndex + 1),
      ];
    case CART.REMOVE_ALL_FROM_CART:
      return [];
    case CART.INCREASE_QUANTITY_CART:
      return [
        ...state.slice(0, cartItemIndex),
        { ...cartItem, cartQuantity: cartItem.cartQuantity + 1 },
        ...state.slice(cartItemIndex + 1),
      ];
    case CART.DECREASE_QUANTITY_CART:
      if (cartItem.cartQuantity < 2) {
        return;
      }
      return [
        ...state.slice(0, cartItemIndex),
        { ...cartItem, cartQuantity: cartItem.cartQuantity - 1 },
        ...state.slice(cartItemIndex + 1),
      ];
    default:
      return state;
  }
}
