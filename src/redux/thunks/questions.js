import { v4 } from 'uuid'
import { addQuestion } from '../actions/actionCreators'

export function handleAddQuestion(optionOneText, optionTwoText) {
    
    return function(dispatch, getState) {
        const id = v4().replace('-', '').slice(0, 22)
        const timestamp = Date.now()
        const author = getState().currentUser

        const question = {
            id,
            timestamp,
            author,
            optionOne: {
                votes: [],
                text: optionOneText
            },
            optionTwo: {
                votes: [],
                text: optionTwoText
            },
        }

        dispatch(addQuestion(question))
    }
}