export default (state = [], action) => {
  // if (action.type === "FETCH_POSTS") {
  //   return action.payload;
  // }

  // return state;

  //Same as above, but deals with any unpredicted case via default
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};
