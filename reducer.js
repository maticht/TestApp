import {GET_POSTS_SUCCESS} from './actions';

export default function myFirstReducer(state = {posts: []}, action) {
  switch (action?.type) {
    case GET_POSTS_SUCCESS:
      return {...state, posts: action.posts};
    default:
      return state;
  }
}
