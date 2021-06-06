import React from 'react'
import { connect } from 'react-redux'

function Leaderboard({ leaderboard }) {
    return (
        <div>
            Hello from Leaderboard Page
            <ol>
                {leaderboard.map(item => (<li key={item.id}>
                    <p>{item.name}</p>
                    <p>Score: {item.score}</p>
                </li>))}
            </ol>
        </div>
    )
}

const mapStateToProps = (state) => {
    const leaderboard = Object.keys(state.users).map(userId => {

        const answers = Object.keys(state.users[userId].answers).length
        const questions = state.users[userId].questions.length
        const score = answers + questions

        return {
            id: userId,
            avatarUrl: state.users[userId].avatarURL,
            name: state.users[userId].name,
            score
        }
    })
        .sort((a, b) => b.score - a.score)

    const currentUser = {
        id: state.currentUser,
        name: state.users[state.currentUser].name,
        avatarUrl: state.users[state.currentUser].avatarURL
    }

    return {
        leaderboard,
        currentUser
    }
}

export default connect(mapStateToProps)(Leaderboard)
