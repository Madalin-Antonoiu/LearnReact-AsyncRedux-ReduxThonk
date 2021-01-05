import jsonPlaceholder from "../apis/jsonPlaceholder";

//function that returns a function
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  // Looking at the API, i only want the data obect property from response
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};
