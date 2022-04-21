import { connect } from "react-redux"
import { logout } from "../../../../actions/session_actions"
import AccountListDropDown from "./account_list_dropdown"
import {withRouter} from 'react-router'

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AccountListDropDown))
