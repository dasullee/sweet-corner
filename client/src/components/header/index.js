import React from 'react'
import './header.scss'
import Nav from '../nav'

export default () =>{
    return (
        <div>
            <img className="curtain" src={require('../../assets/images/header.png')}></img>
            <Nav />
            <img className="cupcake" src={require('../../assets/images/logo.png')}></img>
            <h1 className="center headertext">We deliver cupcakes for the important events in your life!</h1>
            <div className="brownheader"></div>
        </div>
    )
}