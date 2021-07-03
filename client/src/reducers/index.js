import {combineReducers} from 'redux'
import  {reducer as formReducer} from 'redux-form'
import scheduleReducer from './schedule-reducer'
import productReducer from './products_reducer'
import cartReducer from './cart_reducer'
import ordersReducer from './orders_reducer'
const rootReducer = combineReducers({
    cart: cartReducer,
    form: formReducer,
    schedule: scheduleReducer,
    products: productReducer,
    orders: ordersReducer
})

export default rootReducer