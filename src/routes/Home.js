import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { userLogin } from '../redux/actions/actionCreators'
import { handleUserLogin } from '../redux/thunks/currentUser'
import Questions from './Questions'

function Home(props) {
    const { isUserSelected, users, handleLoginPersistance, login } = props

    let ui = null
    if (!isUserSelected) {
        ui = <div>
            <h2>Select a user</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <p>{user.name}</p>
                        <button
                            onClick={() => login(user.id)}
                        >Select this user</button>
                    </li>
                ))}
            </ul>
        </div>
    } else {
        ui = <Redirect to='/questions' />
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

const mapDispatchToProps = (dispatch) => ({
    login(userId) { return dispatch(userLogin(userId)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
