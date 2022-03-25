import { connect } from "react-redux"
import { fetchProducts } from "../../../actions/product_actions"
import ProductIndex from "./product_index"

const mapStateToProps = state => {
    return {
        products: Object.values(state.entities.products)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: (filter) => dispatch(fetchProducts(filter))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex)