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
    case "empty_cart": {
      return [];
    }
    case "add": {
      console.log("product with id:", action.payload.id, "was added");
      return [...state].map((item) => {
        if (item.product === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return { ...item };
        }

        //console.log(item);
      });
      //console.log("newState is:", newState);
    }
    default: {
      return state;
    }
  }
}
