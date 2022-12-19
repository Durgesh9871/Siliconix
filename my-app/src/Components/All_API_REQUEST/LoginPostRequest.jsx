import axios from "axios";

export const LoginPostrequest = (postData) => {
  try {
    axios
      .post("https://639c8eca16d1763ab14d9027.mockapi.io/login", postData)
      .then((res) => {
        console.log(res.data, "resdata");
      });
  } catch (error) {
    console.log(error);
  }
};

export const LoginGetRequest = () => {
  try {
    return axios
      .get("https://639c8eca16d1763ab14d9027.mockapi.io/login")
      .then((res) => res.data);
  } catch (error) {
    console.log(error);
  }
};
