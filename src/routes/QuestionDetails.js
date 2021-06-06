import React from 'react'
import { connect } from 'react-redux'

function QuestionDetails(props) {
    const { currentUser, isPresent, question } = props

    let ui = null

    if (isPresent) {
        ui = <div>
            <h3>{question.author.name} asks</h3>
            <p>Would you rather?</p>
            <button disabled={question.answerState !== 0}>
                {question.options.optionOne}
                {
                    question.answerState !== 0 && (
                        <p>Percentage: {question.answerStatistics.optionOne}%</p>
                    )
                }
            </button>
            <button disabled={question.answerState !== 0}>
                {question.options.optionTwo}
                {
                    question.answerState !== 0 && (
                        <p>Percentage: {question.answerStatistics.optionTwo}%</p>
                    )
                }
            </button>
        </div>
    } else {
        ui = <div>
            Sorry we couldn't find this question
        </div>
    }

    return (
        <div>
            Hello from QuestionDetails Page for user {currentUser.name}
            <div>
                {ui}
            </div>
        </div>
    )
}

const mapStateToProps = ({ users, questions, currentUser }, ownProps) => {
    const questionId = ownProps.match.params.id

    const isPresent = !!questions[questionId]

    const question = {}
    if (isPresent) {
        let answerState = 0

        switch (users[currentUser].answers[questionId]) {
            case 'optionOne':
                answerState = 1;
                break;
            case 'optionTwo':
                answerState = 2;
                break;
            default:
                answerState = 0;
        }

        question.id = questionId
        question.options = {
            optionOne: questions[questionId].optionOne.text,
            optionTwo: questions[questionId].optionTwo.text,
        }
        question.answerState = answerState

        
        const optionOneAnswers = questions[questionId].optionOne.votes.length
        const optionTwoAnswers = questions[questionId].optionTwo.votes.length
        const totalAnswers = optionOneAnswers + optionTwoAnswers

        const answerStats = {
            optionOne: 100*optionOneAnswers / totalAnswers ,
            optionTwo: 100*optionTwoAnswers / totalAnswers,
        }

        const author = {
            name: users[questions[questionId].author].name,
            avatarUrl: users[questions[questionId].author].avatarURL,
        }

        question.answerStatistics = answerStats
        question.author = author
    }

    const user = {
        id: currentUser,
        name: users[currentUser].name,
        avatarUrl: users[currentUser].avatarURL
    }

    return {
        currentUser: user,
        isPresent,
        question
    }
}

export default connect(mapStateToProps)(QuestionDetails)