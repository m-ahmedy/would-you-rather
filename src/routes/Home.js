import React from 'react'
import { connect } from 'react-redux'

function Home(props) {
    const { isUserSelected, users } = props
    return (
        <div>
            Hello from Home Page
            <div>
                {JSON.stringify(users)}
            </div>
            <div>

                {isUserSelected ? 'True' : 'False'}
            </div>
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

export default connect(mapStateToProps)(Home)
