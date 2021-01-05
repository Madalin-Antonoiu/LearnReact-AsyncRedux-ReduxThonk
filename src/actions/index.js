import jsonPlaceholder from "../apis/jsonPlaceholder";

//function that returns a function
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response });
};
