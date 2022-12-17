export const localStorageValue = (value) => (dispatch) => {
  dispatch({ type: "GetLocalstorageRequest" });

  let getitem = JSON.parse(localStorage.getItem("CartItem")) || [];
  getitem.push(value);
  dispatch({ type: "GetLocalstorageSuccess", payload: getitem });
  console.log(getitem, "Getitem");
  localStorage.setItem("CartItem", JSON.stringify(getitem));
};
