import React from 'react'
import { connect } from 'react-redux'
import { handleCreateQuestion } from '../redux/thunks/questions'

function AddQuestion(props) {
    const { createQuestion, currentUser } = props

    function submitHandler(e) {
        e.preventDefault()
        console.log('target0', e.target[0])
        console.log('target1', e.target[1])

        createQuestion(e.target[0].value, e.target[1].value)
    }

    return (
        <div>
            <h2>Hello from Add Question Page for user {currentUser.name}</h2>
            <form onSubmit={submitHandler}>
                <input name='optionOne' type='text' />
                <input name='optionTwo' type='text' />
                <button type='submit'>
                    Create
                </button>
            </form>
        </div>
    )
}

const mapStateToProps = ({ users, questions, currentUser }) => ({
    currentUser: users[currentUser]
})

const mapDispatchToProps = (dispatch) => ({
    createQuestion: (optionOneText, OptionTwoText) => dispatch(handleCreateQuestion(optionOneText, OptionTwoText))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion)