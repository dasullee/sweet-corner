import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getActiveCart, userCartCheckout } from '../../actions';
import Money from '../general/money';
import './cart.scss';

class Cart extends Component {
    componentDidMount() {
        this.props.getActiveCart();
    }

    goToProduct(productId) {
        this.props.history.push(`/products/${productId}`);
    }

    handleCheckout = async () => {
        const { history, userCartCheckout } = this.props;

        const orderId = await userCartCheckout();

        history.push(`/account/orders/${orderId}`);
    }

    renderCheckout(){
        const { auth, cartItems } = this.props;

        if(!cartItems || !cartItems.length){
            return <h2 className="center"><Link to="/products">Back To Products</Link></h2>;
        }

        if(auth){
            return (
                <div className="checkout center mt-3">
                    <button className="btn btn-red" onClick={this.handleCheckout}>Checkout</button>
                </div>
            );
        }

        return <h1 className="center">Must be <Link to="/account/sign-in">Signed In</Link> to checkout</h1>;
    }

    renderItem = ({ each, itemId, name, productId, quantity, thumbnail, total }) => {
        return (
            <tr className="cart-item" key={itemId} onClick={() => this.goToProduct(productId)}>
                <td className="product-image">
                    <img src={thumbnail.url} alt={thumbnail.altText} />
                </td>
                <td className="product-name">{name}</td>
                <td className="product-cost">
                    <Money>{each}</Money>
                </td>
                <td className="product-quantity">{quantity}</td>
                <td className="product-total">
                    <Money>{total}</Money>
                </td>
            </tr>
        );
    }

    renderMessageRow(message) {
        return (
            <tr>
                <td className="center" colSpan="5">
                    <h1>{message}</h1>
                </td>
            </tr>
        );
    }

    render(){
        const { cartItems, totals } = this.props;
        const totalCost = totals?.cost || 0;
        const totalItems = totals?.items || 0;
        let itemElements = this.renderMessageRow('Loading Cart items');

        if(cartItems){
            if(cartItems.length) {
                itemElements = cartItems.map(this.renderItem);
            } else {
                itemElements = this.renderMessageRow('Cart Empty')
            }
        }

        return (
            <div className="cart">
                <h1 className="center">Cart</h1>

                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th className="header-product">Product</th>
                            <th>Each</th>
                            <th>quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemElements}
                        {
                            totalItems
                                ? <tr className="cart-totals">
                                    <td colSpan="3">Cart Totals:</td>
                                    <td>{totalItems}</td>
                                    <td>
                                        <Money>{totalCost}</Money>
                                    </td>
                                </tr>
                                : null
                        }
                    </tbody>
                </table>
                {this.renderCheckout()}
                <div className="center mt-3">
                    <Link to="/checkout/guest" className="btn red guest-checkout-link">Checkout As Guest</Link>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.user.auth,
        cartItems: state.cart.items,
        totals: state.cart.total
    }
}

export default connect(mapStateToProps, {
    getActiveCart: getActiveCart,
    userCartCheckout
})(Cart);
