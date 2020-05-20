export const selectProducts = (state) => {
	return state.productList;
};

export const selectProductsWithTag = (tag) => (state) => {
	if (tag !== "all") {
		return state.productList.products.filter((product) =>
			product.tags.includes(tag)
		);
	} else {
		return state.productList.products;
	}
};
