import { connect } from "react-redux"
import { logout } from "../../../actions/session_actions"
import AccountList from './account_list'

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountList)