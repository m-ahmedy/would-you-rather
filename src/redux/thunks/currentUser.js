import { userLogin, userLogout } from "../actions/actionCreators"

export const handleLogout = () => (dispatch) => {
    localStorage.removeItem('currentUser')

    dispatch(userLogout())
}

export const handleLogin = () => (dispatch) => {
    const storedUserId = localStorage.getItem('currentUser')

    if (storedUserId) {
        dispatch(userLogin(storedUserId))
    }
}