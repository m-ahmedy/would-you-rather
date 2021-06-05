import { SET_CURRENT_USER } from "../actions/actionIdentifiers";

const initialState = 'johndoe'

export default function currentUser(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return action.payload.currentUser
        default:
            return state
    }
}
