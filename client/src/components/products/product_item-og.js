import React from 'react';
import Money from '../general/money';

export default ({ caption, cost, goToDetails, name, thumbnail }) => {

    return (
        <div onClick={goToDetails} className="product-item center">
            <h1>{name}</h1>
            <img src={thumbnail.url} alt={thumbnail.altText}/>
            <h4>{caption}</h4>
            <h2><Money>{cost}</Money></h2>
        </div>
    );
}
