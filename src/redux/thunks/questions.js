import {v4} from 'uuid'
import { questionCreate } from '../actions/actionCreators'

export const handleCreateQuestion = (optionOneText, optionTwoText) => (dispatch, getState) => {
    const id = v4().replace('-', '').slice(0, 22)
    const timestamp = Date.now()
    const author = getState().currentUser

    const question = {
        id,
        timestamp,
        author,
        optionOne: {
            text: optionOneText,
            votes: []
        },
        optionTwo: {
            text: optionTwoText,
            votes: []
        },
    }

    dispatch(questionCreate(question))
}
