import { connect } from "react-redux"
import { signup } from "../../../actions/session_actions"
import SignUpForm from "./signup_form"


const mapStateToProps = state => {
    return {
        errors: Object.values(state.errors),
        formType: 'signup'
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        processForm: (user) =>  dispatch(signup(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)
