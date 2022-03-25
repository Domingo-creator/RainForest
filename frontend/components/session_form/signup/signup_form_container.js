import { connect } from "react-redux"
import { login, signup } from "../../../actions/session_actions"
import SignUpForm from "./signup_form"


const mapStateToProps = state => {
    return {
        errors: Object.values(state.errors.session),
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        signup: (user) =>  dispatch(signup(user)),
        login: (user) => dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)
