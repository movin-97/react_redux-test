import { ActionTypes } from "../action/productAction";


const initialState = {
  products: [
    {
      id: 1,
      title: "laptop",
      category: "electronic",
    },
  ],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
