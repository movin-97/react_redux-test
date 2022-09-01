export const ActionTypes = {
  SET_PRODUCTS: "SET_PRODUCTS",
  SELECTED_PRODUCTS: "SELECTED_PRODUCTS",
  REMOVE_SELECTED_PRODUCTS: "REMOVE_SELECTED_PRODUCTS",
};

export const setProducts = (product) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: product,
  };
};

export const selectedProducts = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: product,
  };
};
