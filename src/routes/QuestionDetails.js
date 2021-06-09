import React from 'react'
import { connect } from 'react-redux'

function QuestionDetails(props) {
    const { isPresent, userInfo, question } = props

    let ui = null
    if (isPresent) {
        ui = (
            <div>
                <h4>{question.author.name} asks</h4>
                <p>
                    Would you rather {' '}
                    <button
                        disabled={false}
                        onClick={e => console.log('Selected: ', question.optionOne.text)}
                    >
                        {question.optionOne.text}</button>
                    {' '}or{' '}
                    <button
                        disabled={false}
                        onClick={e => console.log('Selected: ', question.optionTwo.text)}
                    >
                        {question.optionTwo.text}</button>
                </p>
            </div>
        )
    } else {
        ui = <div>Question not found</div>
    }

    return (
        <div>
            Hello from QuestionDetails Page for user {userInfo.name}
            {'\n'}
            {ui}
        </div>
    )
}

const mapStateToProps = ({ users, questions, currentUser }, { match: { params } }) => {
    const userInfo = {
        id: currentUser,
        name: users[currentUser].name,
        avatarURL: users[currentUser].avatarURL
    }

    const questionId = params.id

    const question = {
        id: '',
        optionOne: { text: '' },
        optionTwo: { text: '' },
        answerState: 0,
        answerStatitistics: {
            optionOne: 0,
            optionTwo: 0
        },
        author: {
            name: '',
            avatarURL: '',
            id: ''
        }
    }

    const isPresent = Object.keys(questions).includes(questionId)

    if (isPresent) {
        const questionItem = questions[questionId]
        question.id = questionId
        question.optionOne.text = questionItem.optionOne.text
        question.optionTwo.text = questionItem.optionTwo.text

        switch (users[currentUser].answers[questionId]) {
            case 'optionOne':
                question.answerState = 1
                break;
            case 'optionTwo':
                question.answerState = 2
                break;
            default:
                question.answerState = 0
        }

        const optionOneAnswers = questions[questionId].optionOne.votes.length
        const optionTwoAnswers = questions[questionId].optionTwo.votes.length
        const total = optionOneAnswers + optionTwoAnswers

        question.answerStatitistics.optionOne = (100 * optionOneAnswers / total).toFixed(2);
        question.answerStatitistics.optionTwo = (100 * optionTwoAnswers / total).toFixed(2);

        question.author.id = users[questions[questionId].author].id
        question.author.name = users[questions[questionId].author].name
        question.author.avatarURL = users[questions[questionId].author].avatarURL

    }


    return { userInfo, question, isPresent }
}
export default connect(mapStateToProps)(QuestionDetails)