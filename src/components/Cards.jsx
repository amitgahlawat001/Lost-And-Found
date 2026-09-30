import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import lostImage from '../images/lost1.jpg'

function Cards() {
  return (
    <div className='cards'>
      <h1>Recently Lost things</h1>
      {["animals", "cars", "trains"].map(el => {
        return <div className='cards' key={el}>
          <h2>{el}</h2>
          <div className='cards_container'>
            
            <ul className='cards_items'>
              <CardItem
                src={lostImage}
                text='Missing dog'
                path='/services'
              />
              <CardItem
                src="https://timesofindia.indiatimes.com/photo/67586673.cms"
                text='Missing cat'
                path='/services'
              />
            </ul>
          </div>
        </div>
      })}
    </div>
    
  );
}

export default Cards;