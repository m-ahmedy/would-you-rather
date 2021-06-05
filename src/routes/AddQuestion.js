import React from 'react'
import { connect } from 'react-redux'

function AddQuestion(props) {
    const { user } = props
    return (
        <div>
            Hello from Add Question Page for user {user.name}
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.users[state.currentUser]
})

export default connect(mapStateToProps)(AddQuestion)