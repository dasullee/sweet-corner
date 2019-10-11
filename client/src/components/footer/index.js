import React from 'react'
import './footer.scss'


export default () =>{
    const year = new Date().getFullYear()
    return (
        <div className="footer">
            <img className="dots" src={require('../../assets/images/dots-footer.png')}></img>
            <div className="foot">Copyright &copy; {year} Sweet Corner. All rights reserved.</div>
            <div className="phone foot">
                <img className="phone1" src={require('../../assets/images/phone.png')}></img>
                <div className="phone1">800 264 2099</div>
            </div>
            
        </div>
    )
}