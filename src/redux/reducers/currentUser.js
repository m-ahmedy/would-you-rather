import { USER_LOGIN, USER_LOGOUT } from "../actions/actionIdentifiers";

const initialState = 'johndoe'

export default function currentUser(state = initialState, action) {
    switch (action.type) {
        case USER_LOGIN:
            return action.payload.userId
        case USER_LOGOUT:
            return ''
        default:
            return state
    }
}
