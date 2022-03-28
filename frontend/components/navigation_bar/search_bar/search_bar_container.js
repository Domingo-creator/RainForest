import { connect } from "react-redux"
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)