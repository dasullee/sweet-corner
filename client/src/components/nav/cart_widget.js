import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getCartTotals} from '../../actions'

class CartWidget extends React.Component {
    componentDidMount(){
        if (this.props.total>0 ){
            this.props.getCartTotals()
        }
    }
    render(){
        return(
            <li className="cart-widget">
                <Link to="/cart">
                    <i className="material-icons">shopping_cart</i>
                    <span className="cart-item-count">{this.props.total ? this.props.total.items : 0}</span>
                </Link>
            </li>
        )
    }
}
function mapStateToProps(state){
    return {
        total: state.cart.total
    }
}
export default connect(mapStateToProps, {
    getCartTotals: getCartTotals
})(CartWidget)