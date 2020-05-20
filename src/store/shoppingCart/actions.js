export function emptyShoppingCart() {
  return { type: "EMPTY_CART" };
}

export function addToCart(id) {
  return { type: "ADD", payload: { id: id } };
}

export function removeFromCart(id) {
  return { type: "REMOVE", payload: { id: id } };
}
