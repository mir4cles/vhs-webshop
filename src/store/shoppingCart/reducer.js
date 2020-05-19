const initialState = [
  {
    product: 1,
    quantity: 1,
  },
  {
    product: 2,
    quantity: 2,
  },
];

export default function shoppingCartSliceReducer(state = initialState, action) {
  switch (action.type) {
    // case
    default: {
      return state;
    }
  }
}
