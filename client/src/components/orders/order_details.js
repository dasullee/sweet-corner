import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOrderDetails } from '../../actions';
import Money from '../general/money';
import './order.scss';

class OrderDetails extends Component {
    componentDidMount(){
        const { getOrderDetails, match: { params } } = this.props;

        getOrderDetails(params.order_id);
    }

    render(){
        const { match: { params }, order } = this.props;

        if(!order){
            return (
                <div className="order-details">
                    <h1 className="center">Loading Order Details...</h1>
                </div>
            );
        }

        return (
            <div className="order-details">
                <h1 className="center">Order Details</h1>
                <h2 className="center">Order # {params.order_id}</h2>
                <h2 className="center">Order Status <span className="status">{order.status}</span></h2>
                <div className="info">
                    <p><strong>Total Items:</strong> {order.itemCount}</p>
                    <p><strong>Total Cost:</strong> <Money>{order.total}</Money></p>
                    <p><strong>Order Placed:</strong> {new Date(order.createdAt).toLocaleString()}</p>
                </div>
            </div>
        );
    }
}

function mapStateToProps({orders}){
    return {
        order: orders.details
    }
}

export default connect(mapStateToProps, { getOrderDetails })(OrderDetails);
