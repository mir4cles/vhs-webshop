const initialState = {
	loading: true,
	products: [
		{
			id: 1,
			name: "The Silence of the Lambs",
			tags: ["horror", "crime", "thriller", "drama"],
			price: 500,
			description:
				"A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
			image:
				"https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
			sold: 12,
		},
		{
			id: 2,
			name: "Titanic",
			tags: ["drama", "romance"],
			price: 30,
			description:
				"A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
			image:
				"https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,671,1000_AL_.jpg",
			sold: 20,
		},
		{
			id: 3,
			name: "The Lion King",
			tags: ["animation", "adventure", "drama", "family"],
			price: 10000,
			description:
				"A lion cub prince is tricked by a treacherous uncle into thinking he caused his father's death and flees into exile in despair, only to later accept in adulthood his identity and his responsibilities.",
			image:
				"https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SY1000_CR0,0,673,1000_AL_.jpg",
			sold: 500,
		},
		{
			id: 4,
			name: "Home Alone",
			tags: ["comedy", "family"],
			price: 90,
			description:
				"An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation.",
			image:
				"https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,672,1000_AL_.jpg",
			sold: 400,
		},
		{
			id: 5,
			name: "Terminator 2",
			tags: ["action", "sci-fi"],
			price: 20000,
			description:
				"A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son, John Connor, from a more advanced and powerful cyborg.",
			image:
				"https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY999_CR0,0,672,999_AL_.jpg",
			sold: 500,
		},
	],
};

// function sortPrice(arr, field) {
// 	return arr.sort(function (a, b) {
// 		if (a[field] > b[field]) {
// 			return 1;
// 		}
// 		if (b[field] > a[field]) {
// 			return -1;
// 		}
// 		return 0;
// 	});
// }

export default function productListSliceReducer(state = initialState, action) {
	switch (action.type) {
		case "SORT_BY_PRICE": {
			console.log("we are sorting by price");
			return state;

			// ...state.sort((productA, productB) => {
			// 	return productB.price - productA.price;
			// }),
		}
		default: {
			return state;
		}
	}
}
