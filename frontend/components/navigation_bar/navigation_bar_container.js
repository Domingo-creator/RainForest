import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { fetchProducts } from "../../actions/product_actions"
import NavBelt from "./navigation_bar"

const mapStateToProps = state => {
    return {
        userId: state.session.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: (filter) => dispatch(fetchProducts(filter)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBelt))