import React from 'react'
import {connect} from 'react-redux'
import {addItemToCart, getProductDetails, clearProductDetails} from '../../actions/index'
import './product-details.scss'
import Money from '../general/money'

class ProductDetails extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            quantity: 1
        }
    }
    componentDidMount() {
        const {getProductDetails, match: {params}} = this.props
        getProductDetails(params.product_id)
    }
    componentWillUnmount() {
        this.props.clearProductDetails()
    }
    incrementQuantity = () => {
        const {quantity} = this.state
        this.setState({
            quantity: quantity + 1
        })
        return this.state.quantity
    }
    decrementQuantity = () => {
        const {quantity} = this.state
        if (quantity > 1) {
            this.setState({
                quantity: quantity - 1
            })
        }
        return this.state.quantity
    }
    async handleAddToCart(){
        await this.props.addItemToCart(this.props.product.id, this.state.quantity)
        this.props.history.push('/cart')
    }
    render() {
        const {product} = this.props
        if (product == null) {
            return <h1>Loading product...</h1>
        }
        else {
            return (
                <div className="product-details">
                
                    <img className="productImage" src={product.image.url}></img>
                    <div className="text">
                        <h1>{product.name}</h1>
                        <h3 className="caption">{product.caption}</h3>
                        <h2>Description</h2>
                        <p>{product.description}</p>
                        <h1 className="right">{Money(product.cost)}</h1>
                    </div>
                    <div className="text">
                        <h2>Quantity</h2>
                        <div className="quantity">
                            <button className="btnNum teel" onClick={this.decrementQuantity}>-</button>
                            <span className="numQuantity">{this.state.quantity}</span>
                            <button className="btnNum teel" onClick={this.incrementQuantity}>+</button>
                            <button className="btnQuantity teel" onClick={this.handleAddToCart.bind(this)}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
function mapStateToProps(state) {
    return {
        product: state.products.details
    }
}

export default connect(mapStateToProps, {
    getProductDetails: getProductDetails,
    clearProductDetails: clearProductDetails,
    addItemToCart
})(ProductDetails)