import React from 'react'
import {getGuestOrderDetails, getActiveCart} from '../../actions'
import {connect} from 'react-redux'
import { queryToObject } from '../../helpers'
import Cart from '../cart'
import './guest-order.scss'

class GuestOrderDetails extends React.Component {
    constructor(props){
        super(props)

    }
    componentDidMount(){
        const { match, location } = this.props;
        
        // const query = queryToObject(location.search);

        // console.log('Query Object:', query);
        const orderID = match.params.order_id
        this.props.getGuestOrderDetails(orderID, location.search)
    }
    render() {
        if (this.props.orderDetails == null){
            return <h1>Loading product...</h1>
        }
        else{
            const goThruItems = this.props.orderDetails.items.map((insideproduct, index) => {
                console.log("hi", insideproduct)
                return (
                    <tr key={index} className="">
                        
                        <td className="imgRow"><img src={insideproduct.product.thumbnail.url} align="right" className="imgCheckout"></img></td>
                        <td className="checkout">{insideproduct.product.name}</td>
                        <td className="checkout"> ${(insideproduct.each/100).toFixed(2)} </td>
                        <td className="checkout">{insideproduct.quantity}</td>
                        <td className="checkout"> ${(insideproduct.total/100).toFixed(2)} </td>
                    </tr>
                )})
            return(
                <div>
                    <header>
                        <h1 className="center">Guest Order Details</h1>
                        <h1 className="center">Status: {this.props.orderDetails.status}</h1>
                        <h2 className="center">Order #: {this.props.orderDetails.id}</h2>
                        <h4 className="center">** Save order number to check order status in the future **</h4>
                    </header>
                    <div>
                        <p>Order Placed: {this.props.orderDetails.createdAt}</p>
                        <p>Order Total Items: {this.props.orderDetails.itemCount}</p>
                        <p>Order Total Cost: ${(this.props.orderDetails.total/100).toFixed(2)}</p>
                        <p>Order Items: </p>
                        <table>
                            <tbody className="guestOrderTable">
                                <tr className="brown">
                                    <th>Image</th>
                                    <th>Product</th>
                                    <th>Each</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                                {goThruItems}
                                <tr >
                                    <td></td>
                                    <td className="mergeCells" colSpan="2">Order Totals:</td>
                                    <td>{this.props.orderDetails ? this.props.orderDetails.itemCount : 0}</td>
                                    <td>${this.props.orderDetails ? (this.props.orderDetails.total/100).toFixed(2) : 0}</td>
                                </tr>
                            </tbody>
                        </table>
                        
                    </div>
                </div>
            )

        }
    }
}
function mapStateToProps(state){
    console.log("state", state)
    return {
        // guestOrder: state.cart.items,
        // cartItems: state.cart.items,
        orderDetails: state.orders.details
    }
}
export default connect(mapStateToProps, {
    getGuestOrderDetails: getGuestOrderDetails,
})(GuestOrderDetails)