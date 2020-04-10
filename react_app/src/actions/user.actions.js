import { userService } from '../services';
import { userConstants } from './constants';
import { showLoading, hideLoading } from 'react-redux-loading-bar'

const login = (username, password) => {

    const request = user => ({ type: userConstants.LOGIN_REQUEST, user });
    const success = user => ({ type: userConstants.LOGIN_SUCCESS, payload: user });
    const failure = err => ({ type: userConstants.LOGIN_FAILURE, err });

    return dispatch => {
        dispatch(request({ username }));
        dispatch(showLoading())
        userService.login(username, password)
            .then(user => {
                dispatch(success(user))
                // history.push('/dashboard')
                setTimeout(() => {
                    dispatch(hideLoading());
                }, 1000);
            },
            err => {
                dispatch(failure(err.toString()));
                console.log("Error in Actions/UserActions/Login");
                console.log(err);
                dispatch(hideLoading());
            }
        )   
    };


};

const logout = () => {
    userService.logout();
    return { type: userConstants.LOGOUT }
}

const getUser = () => {
    // const request = user => ({ type: userConstants.GET_USER,  });

    return dispatch => {
        
        userService.me()
            .then(user => {
                // console.log(user);
                dispatch({ type: userConstants.GET_USER, payload: user })
                return { type: userConstants.GET_USER, payload: user };
            },
            err => {
                console.log("Failure in getUser");
                console.log(err);
            })
    }
    
}

export const userActions = {
    login, logout, getUser
};