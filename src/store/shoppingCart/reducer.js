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
    case "EMPTY_CART": {
      return [];
    }
    case "ADD": {
      //   console.log("product with id:", action.payload.id, "was added");
      return [...state].map((item) => {
        if (item.product === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return { ...item };
        }
      });
    }
    case "REMOVE": {
      const specificProduct = state.find(
        (item) => item.product === action.payload.id
      );
      //console.log("specific product is:", specificProduct.quantity);
      if (specificProduct.quantity === 1) {
        return state.filter((item) => item.product !== specificProduct.product);
      } else {
        return state.map((item) =>
          item.product === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      // Tried to write the whole logic as ternary, but it didnt work
      //   specificProduct.quantity === 1
      //     ? [] //[...state].filter((item) => item.product !== specificProduct.product)
      //     : state.map((item) =>
      //         item.product === action.payload.id
      //           ? { ...item, quantity: item.quantity - 1 }
      //           : item
      //       );
    }
    default: {
      return state;
    }
  }
}
