import React from 'react'
import { connect } from 'react-redux'

function Leaderboard(props) {
    const { leaderboard } = props

    return (
        <div>
            <h2>Leaderboard</h2>
            <div>
                <ol>
                    {leaderboard.map(item => (
                        <li key={item.id}>
                            <p>{item.name}</p>
                            <p>Score: {item.score}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

const mapStateToProps = ({ users, questions, currentUser }) => {
    const leaderboard = Object.keys(users).map(userId => {
        const name = users[userId].name
        const id = users[userId].id
        const avatarURL = users[userId].avatarURL

        const answers = Object.keys(users[userId].answers).length
        const questions = users[userId].questions.length
        const score = answers + questions

        return { name, id, avatarURL, score }
    }).sort((a, b) => b.score - a.score)

    const userInfo = {
        id: currentUser,
        name: users[currentUser].name,
        avatarURL: users[currentUser].avatarURL
    }

    return {
        leaderboard,
        userInfo
    }
}

export default connect(mapStateToProps)(Leaderboard)
