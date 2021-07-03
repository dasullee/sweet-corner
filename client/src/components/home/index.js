import React from 'react'
import './home.scss'

export default () =>{
    return (
        <div className="page">
            <div className="divSideDots">
                <img className="sideDots" src={(require('../../assets/images/dots-box2.png'))}></img>
            </div>
            <div className="containerMain">
                <div className="main">
                    <div>
                        <h2>We cherish the sweet moments...</h2>
                        <p>Sweet Corner's story began first from our passion for sweets, which is inspired by our everyday job and also by the acknowledged weakness for sweets.</p>
                        <p>For us, the Sweet corner means: the right amount of sweet, flawless appearance, the combination of shape, color and proportion and a right and balanced decor for the event.</p>
                        <p>We have been baking gourmet cupcakes, 100% from Scratch, since day one. We always use the finest and most natural ingredients we can find.</p>
                    </div>
                    <div>
                        <h2>We can make happiness with so little!</h2>
                        <p>We can provide services for Weddings, Bar & Bat Mitzvahs, Birthdays, Showers, Corporate Events, and any other special occasion!</p>
                        <p>Our expert bakers are waiting to create a memorable, unique cupcake bursting with freshness and flavor just for you. </p>
                        <p>Their delicious taste, great variety and their sweet universe, colorful and flavorful cupcakes make the best choice for a chic desert. How could you resist these delicious cupcakes?</p>
                    </div>

                    </div>
                <img className="main" src={require('../../assets/images/strips2.png')}></img>
                
            </div>
            <div className="bottom">
                <p>Please note you will be overwhelmed by the sweet content</p>
                <img className="cupcakes" src={(require('../../assets/images/cupcakes.png'))}></img>
            </div>
        
    </div>
    )
}