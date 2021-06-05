import React from 'react'
import { connect } from 'react-redux'

function Questions(props) {
    const { user } = props
    return (
        <div>
            Hello from Questions Page for user {user.name}
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.users[state.currentUser]
})

export default connect(mapStateToProps)(Questions)