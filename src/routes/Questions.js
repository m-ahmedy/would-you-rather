import React from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

function Questions(props) {
    const { userInfo, questions } = props

    return (
        <div>
            <h2>Questions</h2>
            <div>
                <NavLink to='/questions?filter=answered'>Answered</NavLink>
                <NavLink to='/questions?filter=unanswered'>Unanswered</NavLink>
                <NavLink to='/questions?filter=all'>All</NavLink>
            </div>
            <div>
                <ul>
                    {questions.map(question => (
                        <li key={question.id}>
                            <h4>{question.author.name} asks</h4>
                            <p>
                                Would you rather {' '}
                                <span>{question.optionOne.text}</span>
                                {' '}or{' '}
                                <span>{question.optionTwo.text}</span>
                            </p>
                            <Link to={`/questions/${question.id}`}>
                                Go to poll
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = ({ users, questions, currentUser }, { location }) => {
    const filter = new URLSearchParams(location.search).get('filter')
    console.log('filter: ', filter)

    const questionList = Object.keys(questions).filter(questionId => {
        if (filter === 'answered') {
            return Object.keys(users[currentUser].answers).includes(questionId)
        }
        if (filter === 'unanswered') {
            return !Object.keys(users[currentUser].answers).includes(questionId)
        }
        return true
    })
        .map(questionId => {
            const id = questionId
            const optionOne = { text: questions[questionId].optionOne.text }
            const optionTwo = { text: questions[questionId].optionTwo.text }
            const timestamp = questions[questionId].timestamp

            const author = {}
            author.name = users[questions[questionId].author].name
            author.avatarURL = users[questions[questionId].author].avatarURL

            return { id, optionOne, optionTwo, timestamp, author }
        })
        .sort((a, b) => b.timestamp - a.timestamp)

    const userInfo = {
        id: currentUser,
        name: users[currentUser].name,
        avatarURL: users[currentUser].avatarURL
    }

    return { questions: questionList, userInfo }
}

export default connect(mapStateToProps)(Questions)