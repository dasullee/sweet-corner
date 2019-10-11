import types from '../actions/types'

const DEFAULT_STATE = {
    isFetching: false,
    gotData: false,
    scheduleList: []
    
}

export default(state=DEFAULT_STATE, action) => {
    switch(action.type){
        case(types.FETCH_DATA) : {
            return {
                ...state,
                isFetching: true
            }
        }
        case(types.GOT_DATA) : {
            return {
                ...state,
                gotData: true,
                scheduleList: action.payload.schedule
            }
        }
        default:
            return state
    }
}