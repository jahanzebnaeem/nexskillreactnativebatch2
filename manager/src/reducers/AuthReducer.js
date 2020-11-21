const INITIAL_STATE = {email: '', password: '', user: null};
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
} from '../actions/types';

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.payload}; // [], ['j'], ['j', 'a'], ...
    case PASSWORD_CHANGED:
      return {...state, password: action.payload};
    case LOGIN_USER_SUCCESS:
      return {...state, user: action.payload};
    default:
      return state;
  }
};
