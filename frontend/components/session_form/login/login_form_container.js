import { connect } from "react-redux"
import { withRouter } from "react-router-dom/cjs/react-router-dom.min"
import { login } from "../../../actions/session_actions"
import LogInForm from "./login_form"


const mapStateToProps = (state, ownProps) => {
    return {
        errors: Object.values(state.errors),
        formType: 'login'
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        processForm: (user) =>  dispatch(login(user))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogInForm))
