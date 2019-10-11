import React from 'react'
import './cart.scss'
import {connect} from 'react-redux'
import {getActiveCart} from '../../actions'

class Cart extends React.Component {
    componentDidMount() {
        // console.log("props before getActive", this.props)
        // if (this.props.total && this.props.total.items != null){
        //     this.props.getActiveCart()
        // }
        
        this.props.getActiveCart();
        
    }
    handleCheckoutGuest = () => {
        this.props.history.push('/checkout/guest')
    }
    render() {
        const tableProducts = this.props.cartItems.map((product,index) => {
            return (
                <tr key={index} className="products">
                    <td className="imageRow"><img src={product.thumbnail.url} align="right" className="productImage"></img></td>
                    <td className="">{product.name}</td>
                    <td className=""> ${(product.each/100).toFixed(2)} </td>
                    <td className="">{product.quantity}</td>
                    <td className=""> ${(product.total/100).toFixed(2)} </td>
                </tr>
        )})
        return(
            <div className="checkoutOutline">
                <h1 className="heading center brown">Cart</h1>
                <table align="center">
                    <tbody className="cartTable">
                        <tr className="brown">
                            <th>Image</th>
                            <th>Product</th>
                            <th>Each</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                        {this.props.cartItems ? tableProducts : <tr></tr>}
                        <tr >
                            <td></td>
                            <td className="mergeCells" colSpan="2">Cart Total:</td>
                            <td>{this.props.total ? this.props.total.items : 0}</td>
                            <td>${this.props.total ? this.props.total.cost/100 : 0}</td>
                        </tr>
                    </tbody>
                </table>
                <button className="guestCheckoutBtn center" onClick={this.handleCheckoutGuest}>Checkout as Guest</button>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        cartItems: state.cart.items,
        total: state.cart.total
    }
}

export default connect(mapStateToProps, {
    getActiveCart: getActiveCart,
})(Cart)