import { applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

const middlewares = applyMiddleware(
    thunkMiddleware
)

export default middlewares
