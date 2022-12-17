const initialState = {
  isLoading : false,
  LocalStorageData : []
};

export const productReduer = (state = initialState, action) => {
  const {type, payload} = state;
  switch (action.type) {
    case "GetLocalstorageRequest":
      return {...state, isLoading : true}
    case "GetLocalstorageSuccess":
      return {...state, isLoading : false, LocalStorageData : payload}
    default:
      return state;
  }
};
