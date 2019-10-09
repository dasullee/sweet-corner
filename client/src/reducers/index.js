import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import cartReducer from './cart_reducer';
import ordersReducer from './orders_reducer';
import productsReducer from './products_reducer';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
    form: formReducer,
    cart: cartReducer,
    orders: ordersReducer,
    products: productsReducer,
    user: userReducer
});

export default rootReducer;
