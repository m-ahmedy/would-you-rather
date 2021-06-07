import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Questions(props) {
    const { currentUser, questions } = props
    return (
        <div>
            Hello from Questions Page for user {currentUser.name}
            <ul>
                {
                    questions.map(q => (
                        <li key={q.id}>
                            <h3>{q.author.name} asks</h3>
                            <p>Would you rather?</p>
                            <p>{q.options[0]} or {q.options[1]}</p>
                            <Link to={'/questions/' + q.id}>
                                Go to question
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

const mapStateToProps = ({ users, questions: stateQuestions, currentUser }) => {
    const questions = Object.keys(stateQuestions).map(questionId => ({
        id: questionId,
        options: [
            stateQuestions[questionId].optionOne.text,
            stateQuestions[questionId].optionTwo.text,
        ],
        author: {
            name: users[stateQuestions[questionId].author].name,
            avatarUrl: users[stateQuestions[questionId].author].avatarURL,
        }
    }))

    const user = {
        id: currentUser,
        name: users[currentUser].name,
        avatarUrl: users[currentUser].avatarURL
    }

    return {
        questions, currentUser: user
    }
}

export default connect(mapStateToProps)(Questions)