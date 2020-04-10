import { userConstants } from '../actions/constants';

let jwt = localStorage.getItem('token');
let role = localStorage.getItem('role');
const initialState = (jwt)? { loggedIn: true, role: role } : { loggedIn: false, role: "" };

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggedIn: true,
      };
    case userConstants.LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token)
      localStorage.setItem('role', action.payload.roles[0])
      return {
        loggedIn: true,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        loggedIn: false,
      };
    case userConstants.LOGOUT:
      return {
        loggedIn: false,
      };
    default:
      return state
  }
}