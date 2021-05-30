import currentUser from "./currentUser";
import users from "./users";
import questions from "./questions";

import { combineReducers } from "redux";

const reducer = combineReducers({
    currentUser,
    users,
    questions
})

export default reducer
