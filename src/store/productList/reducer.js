const initialState = {
	loading: true,
	products: [
		{
			id: 1,
			name: "The Silence of the Lambs",
			tags: ["horror", "crime", "thriller", "drama"],
			price: 40,
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
			price: 40,
			description:
				"A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
			image:
				"https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
			sold: 12,
		},
	],
};

export default function shoppingCartSliceReducer(state = initialState, action) {
	switch (action.type) {
		// case
		default: {
			return state;
		}
	}
}
