import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};

//Must call the other action creators within full redux cycle, within dispatch - dispatch(fetchPosts())
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  //console.log("about to fetch posts");
  await dispatch(fetchPosts()); // await here means "Don't continue with next line of code inside this function until this one is completed."
  //console.log(getState().posts);
  const userIds = _.uniq(_.map(getState().posts, "userId")); //getState() is from Redux
  userIds.forEach((id) => dispatch(fetchUser(id)));
};
