import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItemToCart, getProductDetails } from '../../actions';

class ProductDetails extends Component {
    constructor(props){
        super(props);

        this.state = {
            quantity: 1
        };
    }

    increase(){
        this.setState({
            quantity: this.state.quantity + 1
        });
    }

    decrease(){
        const { quantity } = this.state;

        if(quantity <= 1) return;

        this.setState({
            quantity: quantity - 1
        });
    }

    componentDidMount(){
        console.log('Product ID:', this.props.match.params.product_id);

        this.props.getDetails(this.props.match.params.product_id);
    }

    async handleAddItem(){
        const { addItem, details: { pid }, history } = this.props;

        await addItem(pid, this.state.quantity);

        history.push('/cart');
    }

    render(){
        const { details } = this.props;

        // Do a check, if details are null, return a loading message <h1>Product loading</h1>

        if(!details){
            return <h1>Product Loading...</h1>
        }

        return (
            <div className="product-details">
                <h1 className="center">{details.name}</h1>
                <div className="div right mb-3">
                    <button onClick={this.decrease.bind(this)}>-</button>
                    <span>{this.state.quantity}</span>
                    <button onClick={this.increase.bind(this)}>+</button>
                    <button onClick={this.handleAddItem.bind(this)} className="btn">Add To Cart</button>
                </div>
                <div className="center">
                    <img src={details.image.url} alt={details.image.altText}/>
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
    addItem: addItemToCart,
    getDetails: getProductDetails
})(ProductDetails);
