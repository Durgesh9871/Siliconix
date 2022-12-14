const initialState = {
  Login: false,
  isLoading: false,
  isError: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "a":
      return state;
    default:
      return state;
  }
};
