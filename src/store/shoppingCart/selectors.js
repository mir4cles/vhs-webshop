export const selectQuantityOfProductInCart = (id) => {
  return (state) => {
    const existingItems = state.shoppingCart.find(
      (item) => item.product === id
    );
    if (existingItems) {
      return existingItems.quantity;
    } else {
      return 0;
    }
  };
};
