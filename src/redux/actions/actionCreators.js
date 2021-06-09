import { ADD_QUESTION, ANSWER_QUESTION, USER_LOGIN, USER_LOGOUT } from "./actionIdentifiers";

export function userLogin(userId) {
    return {
        type: USER_LOGIN,
        payload: {
            userId
        }
    }
}

export function userLogout() {
    return {
        type: USER_LOGOUT,
    }
}

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        payload: { question }
    }
}


export function answerQuestion(questionId, userId, selectedOption) {
    return {
        type: ANSWER_QUESTION,
        payload: { questionId, userId, selectedOption }
    }
}
