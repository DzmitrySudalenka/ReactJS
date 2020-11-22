import * as types from "./types";

const setUser = (user, isAdmin) => {
  return {
    type: types.SET_USER,
    user: user,
    isAdmin: isAdmin
  };
}

export const auth = (email, password) => {
  return dispatch => {
    const isAdmin = email === 'testAdmin@gmail.com' && password === '12345yuiopp';
    localStorage.setItem('user', email);
    localStorage.setItem('isAdmin', isAdmin);
    dispatch(setUser(email, isAdmin));
  }
};

export const authCheckState = () => {
  return dispatch => {
    const user = localStorage.getItem('user');
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    if (user) {
      dispatch(setUser(user, isAdmin));
    }
  };
};

export const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('isAdmin');
  return {
    type: types.AUTH_LOGOUT
  };
};
