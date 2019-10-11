import './products.scss'
import React from 'react'
import {connect} from 'react-redux'
import {getAllProducts} from '../../actions'
import ProductItem from './product_item'

class Products extends React.Component {
    componentDidMount(){
        this.props.getAllProducts()
    }
    goToDetails(id){
        this.props.history.push(`/products/${id}`);
    }
    render() {
        const {products} = this.props
        const productElements = products.map((product) => {
            return (
                <ProductItem 
                    key={product.id}
                    {...product}
                    goToDetails={() => this.goToDetails(product.id)}/>
            )
            })
        return(
            <div>
                <h1 className="titleShop">Shop Our Cupcakes</h1>
                <div className="containerCupCakes">
                    {productElements}
                </div>
            </div>
        )
    }
} 
function mapStateToProps(state) {
    return {
        products: state.products.list
    }
}

export default connect(mapStateToProps, {
    getAllProducts: getAllProducts
}) (Products)