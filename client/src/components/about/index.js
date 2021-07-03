import React from 'react'
import './about.scss'

export default () =>{
    return (
        <div>
            <div className="containerAbout">
                <div className="body">
                    <h2>Delicious cupcakes, magical moments!</h2>
                    <p>Sweet Corner is growing fast. Our delicious cupcakes of all sizes, shapes and colors and tastes are creating a real wow factor.</p>
                    <p>Our delicious cupcakes are different from other bakeries. Why? Well, not only are our cupcakes and baked goods prepared fresh every day, we also create personalized cupcakes in any size and shape just for you! Simply delicious and unique.</p>
                    <p>Our expert bakers create stunning cupcakes in any flavor, color, size or shape you choose.</p>
                    <p>Have you seen a stunning cupcake in a magazine, a TV show or on the internet? Want something unique to reflect a character or personality? Sweet Corner's cupcakes are baked with love and that's why we can create perfect and unique cupcake for you.</p>
                    <p>No idea is too creative for our bakers at Sweet Corner cupcakes. Contact us today to discuss you special cupcake.</p>
                </div>
                <img className="aboutDotsSide" src={(require('../../assets/images/dots-box1.png'))}></img> 
                <img className="aboutStrip" src={require('../../assets/images/strips1.png')}></img>
            </div>
            <img className="bottomAbout" src={require('../../assets/images/box1.png')}></img>
        </div>
    )
}