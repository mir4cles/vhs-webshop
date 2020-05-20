export function emptyShoppingCart() {
  return { type: "empty_cart" };
}

export function addToCart(id) {
  return { type: "add", payload: { id: id } };
}
