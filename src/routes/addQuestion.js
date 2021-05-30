import { connect } from "react-redux"

function AddQuestion(props) {
    return <div>
        Add Question available to user {props.currentUser}
    </div>
}

const mapStateToProps = (state) => ({
    currentUser: state.currentUser
})

export default connect(mapStateToProps)(AddQuestion)
