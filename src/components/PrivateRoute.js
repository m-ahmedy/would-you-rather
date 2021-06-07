import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router'

function PrivateRoute(props) {
    const { currentUser, userIds, ...restProps } = props

    if (userIds.find(id => id === currentUser)) {
        return <Route {...restProps} />
    } else {
        return <Redirect to='/' />
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUser,
    userIds: Object.keys(state.users)
})

export default connect(mapStateToProps)(PrivateRoute)
