import { userLogin, userLogout } from "../actions/actionCreators"

const CURRENT_USER = 'currentUser'

export function handleUserLogin() {
    return function(dispatch, getState) {
        const storedUserId = localStorage.getItem(CURRENT_USER)

        if (storedUserId) {
            dispatch(userLogin(storedUserId))
        }
    }
}

export function handleUserLogout() {
    return function(dispatch, getState) {
        localStorage.removeItem(CURRENT_USER)
        dispatch(userLogout())
    }
}
