import React from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../redux/thunks/questions'

function AddQuestion(props) {
    const { userInfo, addQuestion } = props

    const submitHandler = (e) => {
        e.preventDefault()
        const o1 = e.target['optionOne'].value
        const o2 = e.target['optionTwo'].value
        addQuestion(o1, o2)
    }

    return (
        <div>
            <h2>Hello from Add Question Page for user {userInfo.name}</h2>

            <form onSubmit={submitHandler}>
                <input type='text' name='optionOne' required />
                <input type='text' name='optionTwo' required />
                <button type='submit'>
                    Add Question
                </button>
            </form>
        </div>
    )
}

const mapStateToProps = ({ currentUser, users }) => {
    const userInfo = {
        id: currentUser,
        name: users[currentUser].name,
        avatarURL: users[currentUser].avatarURL
    }
    return { userInfo }
}

const mapDispatchToProps = (dispatch) => ({
    addQuestion(o1, o2) { return dispatch(handleAddQuestion(o1, o2)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion)