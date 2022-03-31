export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_ERRORS'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
import * as SessionApiUtil from '../util/session_api_util'

const receiveCurrentUser = (user) => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }

}

const receiveErrors = errors => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
}

export const login = user => dispatch => {
    return SessionApiUtil.login(user)
        .then( loggedInUser => dispatch(receiveCurrentUser(loggedInUser)),
            err => (dispatch(receiveErrors(err.responseJSON)))
        )
}

export const logout = () => dispatch => {
    return SessionApiUtil.logout()
        .then( () => dispatch(logoutCurrentUser()))
}

export const signup = user => dispatch => {
    return SessionApiUtil.signup(user)
        .then( signedUpUser => dispatch(receiveCurrentUser(signedUpUser)),
          err => (dispatch(receiveErrors(err.responseJSON)))
        )
}

