import { connect } from "react-redux"

function Leaderboard(props) {
    return <div>
        Leaderboard
    </div>
}

const mapStateToProps = (state) => ({
    currentUser: state.currentUser
})

export default connect(mapStateToProps)(Leaderboard)
