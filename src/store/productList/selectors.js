export const selectProducts = (tag, sort) => (state) => {
	if (tag !== "all") {
		return state.productList.products.filter((product) =>
			product.tags.includes(tag)
		);
	} else if (sort === "price") {
		return state.productList.products.sort((productA, productB) => {
			return productB.price - productA.price;
		});
	} else if (sort === "popularity") {
		return state.productList.products.sort((productA, productB) => {
			return productB.sold - productA.sold;
		});
	}
};

export const selectProduct = (productId) => (state) => {
	return state.productList.products.find((product) => product.id == productId);
};
