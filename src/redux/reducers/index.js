import { combineReducers } from 'redux'
import users from './users'
import questions from './questions'
import currentUser from './currentUser'

const reducer = combineReducers({
    users,
    questions,
    currentUser
})

export default reducer
