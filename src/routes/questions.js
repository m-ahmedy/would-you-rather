import { connect } from "react-redux"

function Questions(props) {
    return <div>
        Questions available to user {props.currentUser}
    </div>
}

const mapStateToProps = (state) => ({
    currentUser: state.currentUser
})

export default connect(mapStateToProps)(Questions)
