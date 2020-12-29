import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these Amazing Products</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/cob_downlight.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Led Recessed Cob'
                            path='/services'
                        />
                        <CardItem
                            src='images/led-panel.png'
                            text='Travel through the Islands of Bali in a Private Cruise'
                            label='Led Recessed Panels'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/flood light.jpg'
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Led Flood Light'
                            path='/services'
                        />
                        <CardItem
                            src='images/remote.png'
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Underwater Pool Light'
                            path='/products'
                        />
                        <CardItem
                            src='images/cob2.png'
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Led Recessed Zoom Light'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;