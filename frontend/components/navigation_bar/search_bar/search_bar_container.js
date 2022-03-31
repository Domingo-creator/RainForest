import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { fetchProducts } from "../../../actions/product_actions"
import SearchBar from "./search_bar"

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: (filter) => dispatch(fetchProducts(filter))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar))