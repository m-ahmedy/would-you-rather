import { connect } from "react-redux"

function Question(props) {
    console.log(props)

    return <div>
        Question page of {props.match.params.id} available to user {props.currentUser}
    </div>
}

const mapStateToProps = (state) => ({
    currentUser: state.currentUser
})

export default connect(mapStateToProps)(Question)
