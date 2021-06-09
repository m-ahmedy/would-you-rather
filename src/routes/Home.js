import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import Questions from './Questions'

function Home(props) {
    const { isUserSelected, users } = props

    let ui = null
    if (!isUserSelected) {
        ui = <div>
            <h2>Select a user</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <p>{user.name}</p>
                        <button>Select this user</button>
                    </li>
                ))}
            </ul>
        </div>
    } else {
        ui = <Redirect to={Questions}/>
    }
    return ui
}

const mapStateToProps = ({ users, currentUser, questions }) => {
    const isUserSelected = currentUser !== '' && Object.keys(users).includes(currentUser)
    
    return {
        isUserSelected,
        users: Object.keys(users).map(userId => ({
            name: users[userId].name,
            id: users[userId].id,
            avatarURL: users[userId].avatarURL
        }))
    }
}

export default connect(mapStateToProps)(Home)
