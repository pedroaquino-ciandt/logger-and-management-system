function sortProducts(products, sortKey, isAscending) {
	const compare = (productA, productB) => {
		if (sortKey === "name") {
			return isAscending ? productA.name.localeCompare(productB.name) : productB.name.localeCompare(productA.name);
		} else {
			return isAscending ? productA[sortKey] - productB[sortKey] : productB[sortKey] - productA[sortKey];
		}
	};
	const sortedProducts = products.slice().sort(compare);
	return sortedProducts;
}

module.exports = { sortProducts };
