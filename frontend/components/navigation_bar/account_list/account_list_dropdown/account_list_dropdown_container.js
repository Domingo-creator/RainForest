import { connect } from "react-redux"
import { logout } from "../../../../actions/session_actions"
import AccountListDropDown from "./account_list_dropdown"

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

export default connect(mapStateToProps, mapDispatchToProps)(AccountListDropDown)
