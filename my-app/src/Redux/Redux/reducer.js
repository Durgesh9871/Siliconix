import * as types from "./ActionType";
const initialState = {
  products: [],
  isLoading: false,
  isError: false,
};

export const orderReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PRODUCTS_REQUEST:
      return { ...state, isLoading: true };
    case types.GET_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, products: payload };
    case types.GET_PRODUCTS_FAILURE:
      return { ...state, isLoading: false, isError: true };
    // ************************************************
    case types.ADD_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case types.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: [...state.products, payload],
      };
    case types.ADD_PRODUCT_FAILURE:
      return { ...state, isLoading: false, isError: true };

    // *******************************************************
    case types.DELETE_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case types.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.filter((item) => item.id !== payload),
      };
    case types.DELETE_PRODUCT_FAILURE:
      return { ...state, isLoading: false, isError: true };
    // ***********************************************
    case types.EDIT_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case types.EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.filter((item) => {
          if (item.id === payload.id) {
            return (
              (item.title = payload.num.title),
              (item.brand = payload.num.brand),
              (item.price = payload.num.price),
              (item.color = payload.num.color),
              (item.rating = payload.num.rating)
            );
          }
          return item;
        }),
      };
    case types.EDIT_PRODUCT_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
