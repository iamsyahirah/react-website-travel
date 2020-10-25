import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destination!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-5.jpg"
                        text="Travel through the Islands of Bali in a Private Cruise"
                        label="Luxury"
                        path="/services"
                        />  
                         <CardItem 
                        src="images/img-6.jpg"
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Adventure"
                        path="/services"
                        />         
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-3.jpg"
                        text="Hiking with foot and explore nature with your own eye"
                        label="Hiking"
                        path="/services"
                        />  
                         <CardItem 
                        src="images/img-4.jpg"
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Adrenaline"
                        path="/services"
                        />  
                         <CardItem 
                        src="images/img-8.jpg"
                        text="Ride through the Sahara Desert on a guided camel tour"
                        label="Tour"
                        path="/services"
                        />             
                    </ul>
                </div>
            </div>
            
        </div>
    );
}

export default Cards
