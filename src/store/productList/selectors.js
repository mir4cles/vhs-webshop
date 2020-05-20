export const selectProducts = (tag, sort) => (state) => {
	if (tag !== "all") {
		return state.productList.products.filter((product) =>
			product.tags.includes(tag)
		);
	} else {
		return state.productList.products.sort((productA, productB) => {
			return productB.price - productA.price;
		});
	}
};

export const selectProduct = (productId) => (state) => {
	return state.productList.products.find((product) => product.id == productId);
};
