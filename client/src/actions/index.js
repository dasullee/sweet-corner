import types from './types';
import axios from 'axios';
import { withHeaders } from '../helpers';

export const accountSignIn = user => async dispatch => {
    try {
        const { data } = await axios.post(`/auth/sign-in`, user, withHeaders());

        localStorage.setItem('sc-auth-token', data.token);
        localStorage.removeItem('sc-cart-token');
        
        dispatch({
            type: types.USER_SIGN_IN,
            ...data.user
        });
    } catch(error){
        console.log('Error Signing In:', error);
    }
}

export const accountSignOut = () => {
    localStorage.removeItem('sc-auth-token');

    return {
        type: types.USER_SIGN_OUT
    }
}

export const addItemToCart = (productId, quantity) => async (dispatch) => {
    try {
        const resp = await axios.post(`/api/cart/items/${productId}`, {
            quantity: quantity
        }, withHeaders());

        localStorage.setItem('sc-cart-token', resp.data.cartToken);

        dispatch({
            type: types.ADD_ITEM_TO_CART,
            cartTotal: resp.data.total
        });
    } catch(error){
        console.log('Add Item To Cart Error:', error.message);
    }
}

export const userCartCheckout = () => async dispatch => {
    try {
        const { data } = await axios.post(`/api/orders`, null, withHeaders());

        dispatch({
            type: types.USER_CART_CHECKOUT,
            orderId: data.id
        });

        return data.id;
    } catch (error) {
        console.log('Error With Checkout:', error);
    }
}

export const clearProductDetails = () => ({ type: types.CLEAR_PRODUCT_DETAILS });

export const createGuestOrder = guest => async dispatch => {
    try {
        const cartToken = localStorage.getItem('sc-cart-token');
        const axiosConfig = {
            headers: {
                'X-Cart-Token': cartToken
            }
        };

        const resp = await axios.post(`/api/orders/guest`, guest, axiosConfig);

        localStorage.removeItem('sc-cart-token');

        dispatch({
            type: types.CREATE_GUEST_ORDER,
            order: {
                id: resp.data.id,
                message: resp.data.message
            }
        });

        return {
            email: guest.email,
            orderId: resp.data.id
        };
    } catch (error) {
        console.log('Error with guest checkout:', error);
    }
}

export const createAccount = user => async dispatch => {
    try {
        const { data } = await axios.post(`/auth/create-account`, user, withHeaders());
        
        localStorage.setItem('sc-auth-token', data.token);
        localStorage.removeItem('sc-cart-token');

        dispatch({
            type: types.USER_SIGN_IN,
            ...data.user
        });
    } catch(error) {
        console.log('Error:', error);
    }
}

export const getActiveCart = () => async dispatch => {
    try {
        const resp = await axios.get(`/api/cart`, withHeaders());

        dispatch({
            type: types.GET_ACTIVE_CART,
            cart: resp.data
        });
    } catch(error){
        console.log('Get active cart error:', error);
    }
}

export const getAllProducts = () => async dispatch => {
    try {
        const resp = await axios.get('/api/products');

        dispatch({
            type: types.GET_ALL_PRODUCTS,
            products: resp.data.products
        });
    } catch(err) {
        console.log('Error getting all products:', err);
    }
}

export const getCartTotals = () => async dispatch => {
    try {
        const resp = await axios.get(`/api/cart/totals`, withHeaders());

        dispatch({
            type: types.GET_CART_TOTALS,
            total: resp.data.total
        });
    } catch(error) {
        // console.log('Error getting cart totals:', error);

        dispatch({
            type: types.GET_CART_TOTALS,
            total: {
                items: 0,
                cost: 0
            }
        });
    }
}

export const getOrderDetails = orderId => async dispatch => {
    try {
        const { data } = await axios.get(`/api/orders/${orderId}`, withHeaders());

        dispatch({
            type: types.GET_ORDER_DETAILS,
            ...data
        });
    } catch(error) {
        console.log('Error getting order details:', error);
    }
}

export const getGuestOrderDetails = (orderId, email) => async dispatch => {
    try {
        const resp = await axios.get(`/api/orders/guest/${orderId}`, {
            params: { email }
        });

        dispatch({
            type: types.GET_GUEST_ORDER_DETAILS,
            ...resp.data
        });
    } catch(error) {
        console.log('Error getting guest order details:', error.response);
    }
};

export const getProductDetails = productId => async dispatch => {
    try {
        const resp = await axios.get(`/api/products/${productId}`);

        dispatch({
            type: types.GET_PRODUCT_DETAILS,
            product: resp.data
        });
    } catch(err) {
        console.log('Error getting product details:', err);
    }
}

export const jwtSignIn = () => async dispatch => {
    try {
        dispatch({
            type: types.USER_TEMP_AUTH
        });

        const { data } = await axios.get(`/auth/sign-in`, withHeaders());

        dispatch({
            type: types.USER_JWT_SIGN_IN,
            ...data.user
        });
    } catch(error) {
        console.log('Error in JWT Sign In');
    }
}
