import { connect } from "react-redux"
import React from 'react'
import { Link } from 'react-router-dom';
import { closeModal } from "../../../actions/modal_actions"; 

const BuyNow = ({product}) => {

    // const formatName = (name) => {
    //     return name.length > 50 ? name.slice(0, 50).concat('...') : name
    // }

    return(
      <div>
          <h1>im here</h1>
          {product?.name}
      </div>
    )
}

const BuyNowModal = ({modal, product, closeModal}) => {
    if(modal !== 'buy_now' ) return null;

    return (
        <div className="modal-background" onClick={() => closeModal()}>
            <div className="modal-child" >
                <BuyNow product={product} />
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        modal: state.modal,
        // results: Object.values(state.entities.searchResults)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyNowModal)
