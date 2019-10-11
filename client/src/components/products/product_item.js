import React from 'react'
import Money from '../general/money'

export default (props) => {
    return(
        <div className="product-item" onClick={props.goToDetails}>
            <h1>{props.name}</h1>
            <img src={props.thumbnail.url}></img>
            <p>{props.caption}</p>
            <h3>{Money(props.cost)}</h3>
        </div>
    )
}