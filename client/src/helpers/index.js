export function withHeaders(){
    return {
        headers: {
            authorization: localStorage.getItem('sc-auth-token') || '',
            'x-cart-token': localStorage.getItem('sc-cart-token') || ''
        }
    }
}

export function queryToObject(query) {
    let queryObject = null;

    if (query && typeof query === 'string') {
        queryObject = {};
        query.split('?').pop().split('&').forEach(pair => {
            const [k, v] = pair.split('=');
            queryObject[k] = decodeURI(v);
        });
    }

    return queryObject;
}
