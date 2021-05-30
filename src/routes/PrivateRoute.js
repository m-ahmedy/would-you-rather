import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

function PrivateRoute(props) {
    if (props.currentUser === '') {
        return <Redirect to='/' />
    }

    return <Route {...props}/>
}

const mapStateToProps = (state) => ({
    currentUser: state.currentUser
})

export default connect(mapStateToProps)(PrivateRoute)
