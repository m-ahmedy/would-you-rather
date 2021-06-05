import { SET_CURRENT_USER } from "./actionIdentifiers";

export function setCurrentUser(currentUser) {
    return {
        type: SET_CURRENT_USER,
        payload: {
            currentUser
        }
    }
}