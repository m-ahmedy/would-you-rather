import React from 'react'
import { connect } from 'react-redux'

function QuestionDetails(props) {
    const { user, match, questionIds, questions } = props

    let ui = null
    if (questionIds.find(id => id === match.params.id)) {
        ui = <div>
            <p>{questions[match.params.id].optionOne.text}</p>
            <p>{questions[match.params.id].optionTwo.text}</p>
        </div>
    } else {
        ui = <div>Not found</div>
    }

    return (
        <div>
            Hello from QuestionDetails Page for user {user.name}
            {'\n'}
            Question ID: {match.params.id}
            {ui}
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.users[state.currentUser],
    questionIds: Object.keys(state.questions),
    questions: state.questions
})

export default connect(mapStateToProps)(QuestionDetails)