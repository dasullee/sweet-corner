import types from '../actions/types';

const DEFAULT_STATE = {
    auth: false,
    id: null,
    email: null,
    name: null,
}

export default (state = DEFAULT_STATE, {type, ...action}) => {
    switch(type){
        case types.USER_CREATE_ACCOUNT:
        case types.USER_JWT_SIGN_IN:
        case types.USER_SIGN_IN:
            return { ...state, auth: true, email: action.email, id: action.pid, name: action.name };
        case types.USER_SIGN_OUT:
            return { ...DEFAULT_STATE };
        case types.USER_TEMP_AUTH:
            return { ...state, auth: true };
        default:
            return state;
    }
}
