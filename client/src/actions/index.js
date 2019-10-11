import types from './types'
import axios from 'axios'

export const getSchedule = () => async dispatch => {
    try {
        dispatch({
            type: types.FETCH_DATA
        })
        const {data} = await axios.get('/data/schedule.json')
        if (data){
            dispatch({
                type: types.GOT_DATA,
                payload: data
            })
        }
    }
    catch(error){
        console.log(error)
    }
}

export const getAllProducts = () => async dispatch => {
    try {
        const response = await axios.get('/api/products')
        dispatch({
            type: types.GET_ALL_PRODUCTS,
            products: response.data.products
        })
    }
    catch(error) {
        console.log(error)
    }
}
export const getProductDetails = (productID) => async dispatch => {
    try {
        const response = await axios.get(`/api/products/${productID}`)
        dispatch({
            type: types.GET_PRODUCT_DETAILS,
            product: response.data
        })
    }
    catch (error) {
        console.log(error)
    }
}
export const clearProductDetails = () => (
    
    {
        type: types.CLEAR_PRODUCT_DETAILS
    }
    
)
export const addItemToCart = (productID, quantityAmnt) => async dispatch => {
    try {
        const cartToken = localStorage.getItem('sc-cart-token');
        const axiosConfig = {
            headers: {
                'X-Cart-Token': cartToken
            
            }
        }
        const response = await axios.post(`/api/cart/items/${productID}`, {
            quantity: quantityAmnt
        },axiosConfig)
        console.log("adding to cart:", response)
        localStorage.setItem('sc-cart-token', response.data.cartToken)
        
        dispatch({
            type: types.ADD_ITEMS_TO_CART,
            cartTotal: response.data.total
        })
        console.log("response.data.total", response)
    }
    catch(error) {
        console.log('Add Item To Cart Error: Something Went Wrong')
        console.log(error)
    }
}

export const getActiveCart = () => async dispatch => {
    try {
       
        const cartToken = localStorage.getItem('sc-cart-token')
        const axiosConfig = {
            headers: {
                'X-Cart-Token': cartToken
            }
        }
        const response = await axios.get(`/api/cart`, axiosConfig)
        
        console.log("RESPONSE", response)
        dispatch({
            type: types.GET_ACTIVE_CART,
            cart: response.data
        })
        console.log("it worked")
    }
    catch(error){
        console.log("Error in Cart:", error)
    }
}
export const getCartTotals = () => async dispatch => {
    try {
        const cartToken = localStorage.getItem('sc-cart-token')
        const axiosConfig = {
            headers: {
                'X-Cart-Token': cartToken
            }
        }
        const response = await axios.get(`/api/cart/totals`, axiosConfig)
        dispatch({
            type: types.GET_CART_TOTALS,
            total: response.data.total
        })
    }
    catch(error) {
        console.log('Error getting cart totals:', error);
    }
}
export const createGuestOrder = guest => async dispatch => {
    try {
        const cartToken = localStorage.getItem('sc-cart-token')
        const axiosConfig = {
            headers: {
                'X-Cart-Token': cartToken
            }
        }
        const response = await axios.post(`/api/orders/guest`, guest, axiosConfig)
        localStorage.removeItem('sc-cart-token')
        dispatch({
            type: types.CREATE_GUEST_ORDER,
            order: {
                id: response.data.id,
                message: response.data.message
            }
        })
        return {
            email: guest.email,
            orderId: response.data.id
        }
    } catch (error) {
        console.log('Error with guest checkout:', error)
    }
}
export const getGuestOrderDetails = (orderId, email) => async dispatch => {
    try {
        const response = await axios.get(`/api/orders/guest/${orderId}${email}`)
        console.log("in reducer")
        dispatch({
            type: types.GET_GUEST_ORDER_DETAILS,
            guestOrder: response.data
        })
    }
    catch(error){
        console.log(error)
    }
}
export default {
    getSchedule: getSchedule
}