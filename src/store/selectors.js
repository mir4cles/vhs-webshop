export const selectShoppingCart = (state) => {
  const productList = state.shoppingCart.map((shoppingItem) => {
    return {
      product: state.productList.products.find(
        (product) => product.id === shoppingItem.product
      ),
      quantity: shoppingItem.quantity,
    };
  });
  return productList;
};
