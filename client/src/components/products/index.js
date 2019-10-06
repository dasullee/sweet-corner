import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from './product_item';
import { getAllProducts } from '../../actions';
import './products.scss';

class Products extends Component {
    componentDidMount(){
        this.props.getAllProducts();
    }

    goToDetails(id){
        this.props.history.push(`/products/${id}`);
    }

    render(){
        const { products } = this.props;

        const productElements = products.map((product) => {
            return (
                <ProductItem 
                    key={product.id} 
                    {...product} 
                    goToDetails={this.goToDetails.bind(this, product.id)}
                />
            );
        });

        return (
            <div className="products">
                <h1 className="center">Shop Our Cupcakes</h1>
                {productElements}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        products: state.products.list
    };
}

export default connect(mapStateToProps, {
    getAllProducts: getAllProducts
})(Products);
