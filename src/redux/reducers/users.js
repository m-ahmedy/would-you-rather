import { QUESTION_ANSWER, QUESTION_CREATE } from "../actions/actionIdentifiers"

const initialState = {
    sarahedo: {
        id: 'sarahedo',
        name: 'Sarah Edo',
        avatarURL: '',
        answers: {
            "8xf0y6ziyjabvozdd253nd": 'optionOne',
            "6ni6ok3ym7mf1p33lnez": 'optionTwo',
            "am8ehyc8byjqgar0jgpub9": 'optionTwo',
            "loxhs1bqm25b708cmbf3g": 'optionTwo'
        },
        questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
    },
    tylermcginnis: {
        id: 'tylermcginnis',
        name: 'Tyler McGinnis',
        avatarURL: '',
        answers: {
            "vthrdm985a262al8qx3do": 'optionOne',
            "xj352vofupe1dqz9emx13r": 'optionTwo',
        },
        questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
    },
    johndoe: {
        id: 'johndoe',
        name: 'John Doe',
        avatarURL: '',
        answers: {
            "xj352vofupe1dqz9emx13r": 'optionOne',
            "vthrdm985a262al8qx3do": 'optionTwo',
            "6ni6ok3ym7mf1p33lnez": 'optionTwo'
        },
        questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
    }
}

export default function users(state = initialState, action) {
    switch (action.type) {
        case QUESTION_CREATE:
            const question = action.payload.question

            return {
                ...state,
                [question.author]: {
                    ...state[question.author],
                    questions: [...state[question.author].questions, question.id]
                }
            }
        case QUESTION_ANSWER:
            const { userId, questionId, selectedOption } = action.payload

            return {
                ...state,
                [userId]: {
                    ...state[userId],
                    answers: {
                        ...state[userId].answers,
                        [questionId]: selectedOption
                    }
                }
            }
        default: return state
    }
    return state
}
