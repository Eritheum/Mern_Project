import * as actions from "../constants/actionTypes"

const postReducer = (posts = [], action) => {
  switch (action.type) {
    case actions.UPDATE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case actions.LIKE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case actions.FETCH_ALL:
      return action.payload;
    case actions.CREATE:
      return [...posts, action.payload];
    case actions.DELETE:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};
export default postReducer;