import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from './product_item';
import { getAllProducts } from '../../actions';
import './products.scss';

class Products extends Component {
    componentDidMount(){
        this.props.getAllProducts();
    }

    render(){
        const { history, products } = this.props;

        const productItems = products.map(({pid, ...product}) => {
            return <ProductItem key={pid} {...product} goToDetails={() => history.push(`/products/${pid}`)}/>
        });

        return (
            <div className="products">
                <h1 className="center">Shop Our Products</h1>

                {productItems}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        products: state.products.list
    }
}

export default connect(mapStateToProps, {
    getAllProducts: getAllProducts
})(Products);
