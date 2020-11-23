import * as types from "../actions/types";
import {updateObject} from "../utility";

const initialState = {
  user: null,
  isAdmin: false
};

const setUser = (state, action) => {
  return updateObject( state, {user: action.user, isAdmin: action.isAdmin});
};

const authLogout = (state) => {
  return updateObject(state, {user: null, isAdmin: false});
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER: return setUser(state, action);
    case types.AUTH_LOGOUT: return authLogout(state, action);
    default:
      return state;
  }
};

export default reducer;
