import { WISHLIST } from "../defines";

export const addToWishlist = (product) => ({
  type: WISHLIST.ADD_TO_WISHLIST,
  product,
});

export const removeFromWishlist = (productId) => ({
  type: WISHLIST.REMOVE_FROM_WISHLIST,
  productId,
});
