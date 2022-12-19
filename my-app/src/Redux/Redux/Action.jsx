//Write the API calling functions here;
import * as types from "./ActionType";
import axios from "axios";

export const GetProduct =
  (page = 1) =>
  (dispatch) => {
    try {
      dispatch({ type: types.GET_PRODUCTS_REQUEST });
      axios
        .get(
          `https://639d63ed16d1763ab15df85c.mockapi.io/laptop?page=${page}&limit=9`
        )
        .then((res) =>
          dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: res.data })
        );
    } catch (error) {
      dispatch({ type: types.GET_PRODUCTS_FAILURE });
    }
  };

export const addProduct = (payload) => (dispatch) => {
  try {
    dispatch({ type: types.ADD_PRODUCT_REQUEST });

    axios
      .post("https://639d63ed16d1763ab15df85c.mockapi.io/laptop", payload)
      .then((res) =>
        dispatch({ type: types.ADD_PRODUCT_SUCCESS, payload: res.data })
      );
  } catch (error) {
    dispatch({ type: types.ADD_PRODUCT_FAILURE });
  }
};

export const Deletepro = (id) => (dispatch) => {
  try {
    dispatch({ type: types.DELETE_PRODUCT_REQUEST });
    axios
      .delete(`https://639d63ed16d1763ab15df85c.mockapi.io/laptop/${id}`)
      .then((res) =>
        dispatch({ type: types.DELETE_PRODUCT_SUCCESS, payload: id })
      );
  } catch (error) {
    dispatch({ type: types.DELETE_PRODUCT_FAILURE });
  }
};

export const Updatefunc = (num, id) => (dispatch) => {
  try {
    dispatch({ type: types.EDIT_PRODUCT_REQUEST });
    console.log(num, "NUM");
    axios
      .patch(`https://639d63ed16d1763ab15df85c.mockapi.io/laptop/${id}`, {
        title: num.title,
        brand: num.brand,
        price: num.price,
        color: num.color,
        rating: num.rating,
      })
      .then((res) =>
        dispatch({ type: types.EDIT_PRODUCT_SUCCESS, payload: { num, id } })
      );
  } catch (error) {
    dispatch({ type: types.EDIT_PRODUCT_FAILURE });
  }
};
