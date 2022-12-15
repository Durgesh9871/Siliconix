//Write the API calling functions here;
import * as types from "./ActionType";
import axios from "axios";

export const GetProduct = () => (dispatch) => {
  try {
    dispatch({ type: types.GET_PRODUCTS_REQUEST });
    axios
      .get("http://localhost:8085/Mobile")
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
      .post("http://localhost:8085/Mobile", payload)
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
    console.log(id, "id");
    axios
      .delete(`http://localhost:8085/Mobile/${id}`)
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

    axios
      .patch(`http://localhost:8085/Mobile/${id}`, {
        title: num.title,
        description: num.desc,
        brand: num.brand,
        price: num.prize,
        color: num.color,
        discount: num.discount,
      })
      .then((res) =>
        dispatch({ type: types.EDIT_PRODUCT_SUCCESS, payload: { num, id } })
      );
  } catch (error) {
    dispatch({ type: types.EDIT_PRODUCT_FAILURE });
  }
};
