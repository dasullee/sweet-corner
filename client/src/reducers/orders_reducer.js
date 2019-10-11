import types from '../actions/types'

const DEFAULT_STATE = {
    details: null
}
export default(state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.GET_GUEST_ORDER_DETAILS:
            console.log("state in reducer", action)
            return {
                ...state,
                details: action.guestOrder
            }
        default:
            return state
    }
}