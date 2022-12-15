import axios from "axios";

export const CheckLogin = (loginval) => (dispatch) => {
  dispatch({ type: "LoginRequest" });
  axios
    .get(
      "https://unit-5-project-contact-form-default-rtdb.asia-southeast1.firebasedatabase.app/contact_form_unit_five_project.json"
    )
    .then((res) => {
      console.log(loginval);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
