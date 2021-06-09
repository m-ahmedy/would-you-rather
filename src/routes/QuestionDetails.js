import React from 'react'
import { connect } from 'react-redux'
import { answerQuestion } from '../redux/actions/actionCreators'

function QuestionDetails(props) {
    const { isPresent, userInfo, question, onAnswer } = props

    const answerHandler = (selectedOption) => {
        onAnswer(question.id, userInfo.id, selectedOption)
    }

    let ui = null
    if (isPresent) {
        ui = (
            <div>
                <h4>{question.author.name} asks</h4>
                <p>
                    Would you rather {' '}
                    <button
                        disabled={question.answerState !== 0}
                        onClick={e => answerHandler('optionOne')}
                    >
                        {question.optionOne.text}
                        {
                            question.answerState !== 0
                            && <p>{question.answerStatitistics.optionOne}%</p>
                        }
                    </button>
                    {' '}or{' '}
                    <button
                        disabled={question.answerState !== 0}
                        onClick={e => answerHandler('optionTwo')}
                    >
                        {question.optionTwo.text}
                        {
                            question.answerState !== 0
                            && <p>{question.answerStatitistics.optionTwo}%</p>
                        }
                    </button>
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

const mapDispatchToProps = (dispatch) => ({
    onAnswer(questionId, userId, selectedOption) {
        return dispatch(answerQuestion(questionId, userId, selectedOption))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetails)