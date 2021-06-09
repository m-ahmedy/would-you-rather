import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router'
import { NavLink } from 'react-router-dom'
import { handleUserLogout } from '../redux/thunks/currentUser'

function PrivateRoute(props) {
    const { currentUser, userIds, logout, ...restProps } = props

    if (userIds.find(id => id === currentUser)) {
        return <div>
            <button
                onClick={logout}
            >
                Logout
            </button>
            <div>
                <NavLink to='/questions'>Questions</NavLink>
                <NavLink to='/questions/add'>Add Question</NavLink>
                <NavLink to='/leaderboard'>Leaderboard</NavLink>
            </div>
            <Route {...restProps} />
        </div>
    } else {
        return <Redirect to='/' />
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUser,
    userIds: Object.keys(state.users)
})

const mapDispatchToProps = (dispatch) => ({
    logout() { return dispatch(handleUserLogout()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)
