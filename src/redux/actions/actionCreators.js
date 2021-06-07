import { QUESTION_ANSWER, QUESTION_CREATE, USER_LOGIN, USER_LOGOUT } from "./actionIdentifiers";

export function userLogin(currentUser) {
    return {
        type: USER_LOGIN,
        payload: {
            currentUser
        }
    }
}

export function userLogout() {
    return {
        type: USER_LOGOUT,
    }
}

export function questionCreate(question) {
    return {
        type: QUESTION_CREATE,
        payload: { question }
    }
}

export function questionAnswer(userId, questionId, selectedOption) {
    return {
        type: QUESTION_ANSWER,
        payload: { userId, questionId, selectedOption }
    }
}
