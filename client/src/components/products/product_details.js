import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItemToCart, clearProductDetails, getProductDetails } from '../../actions';
import Money from '../general/money';
import './product_details.scss';

class ProductDetails extends Component {
    constructor(props){
        super(props);

        this.state = {
            quantity: 1
        };
    }

    componentDidMount(){
        const { getProductDetails, match: { params } } = this.props;

        getProductDetails(params.product_id);
    }

    componentWillUnmount(){
        this.props.clearProductDetails();
    }

    decrementQuantity(){
        const { quantity } = this.state;

        if(quantity === 1) return;

        this.setState({
            quantity: quantity - 1
        });
    }

    async handleAddToCart(){
        const { id } = this.props.details;
        const { quantity } = this.state;

        await this.props.addItemToCart(id, quantity);

        this.props.history.push('/cart');
    }

    incrementQuantity(){
        this.setState({
            quantity: this.state.quantity + 1
        });
    }

    render(){
        const { details } = this.props;

        if(!details){
            return <h1 className="details-loading">Loading product</h1>;
        }

        const { caption, cost, description, image, name } = details;

        return (
            <div className="product-details">
                <div className="col s6 product-image center">
                    <img src={image.url} alt={image.altText} />
                </div>
                
                <div className="col s6 product-info">
                    <h1>{name}</h1>
                    <p className="caption fancy">{caption}</p>
                    <h2>Description</h2>
                    <p>{description}</p>
                    <h1 className="right"><Money>{cost}</Money></h1>

                    <div className="product-quantity right mb-3">
                        <h2 className="left">Quantity</h2>
                        <div className="quantity-controls">
                            <button className="btn btn-quantity" onClick={this.decrementQuantity.bind(this)}>-</button>
                            <span className="quantity">{this.state.quantity}</span>
                            <button className="btn btn-quantity" onClick={this.incrementQuantity.bind(this)}>+</button>
                        </div>
                        
                        <button className="btn" onClick={this.handleAddToCart.bind(this)}>Add To Cart</button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        details: state.products.details
    }
}

export default connect(mapStateToProps, {
    addItemToCart: addItemToCart,
    clearProductDetails: clearProductDetails,
    getProductDetails: getProductDetails
})(ProductDetails);
