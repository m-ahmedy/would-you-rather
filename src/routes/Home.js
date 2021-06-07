import React from 'react'
import { connect } from 'react-redux'
import { userLogin } from '../redux/actions/actionCreators'

function Home(props) {
    const { isUserSelected, users, setCurrentUser } = props
    
    function handleUserSelect(userId) {
        setCurrentUser(userId)
    }

    return (
        <div>
            Hello from Home Page
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <button onClick={e => handleUserSelect(user.id)}>Login as {user.name}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    const users = Object.keys(state.users).map(userId => ({
        id: userId,
        name: state.users[userId].name,
        avatarUrl: state.users[userId].avatarURL
    }))

    const isUserSelected = state.currentUser !== '' && Object.keys(state.users).includes(state.currentUser)

    return {
        users,
        isUserSelected
    }
}

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (userId) => dispatch(userLogin(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
