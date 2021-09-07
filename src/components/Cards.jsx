import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import lostImage from '../images/lost1.jpg'

function Cards() {
  return (
    <div className='cards'>
      <h1>Recently Lost things</h1>
      <h2>Lost animals</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
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
      <h2>Lost Electronics</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR891yItNt1RSpQfEoC1ATg69exD3hxrq6WtQ&usqp=CAU'
              text='Lost my Nokia 3310 '
              path='/services'
            />
             <CardItem
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Nadal_dzia%C5%82ajaca_Nokia_1100_%282018_rok%29_Zakupiona_w_2005_roku._Obecnie_obs%C5%82uguje_polsk%C4%85_sie%C4%87_Play.jpg/1200px-Nadal_dzia%C5%82ajaca_Nokia_1100_%282018_rok%29_Zakupiona_w_2005_roku._Obecnie_obs%C5%82uguje_polsk%C4%85_sie%C4%87_Play.jpg"
              text='Yesterday lost my 1100 in metro'
              path='/services'
            />
           </ul>
        </div>
      </div>
      <h2>Lost Documents</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
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
      <h1>Recently Found things</h1>
      <h2>Found animals</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
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
      <h2>Found Electronics</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR891yItNt1RSpQfEoC1ATg69exD3hxrq6WtQ&usqp=CAU'
              text='Lost my Nokia 3310 '
              path='/services'
            />
             <CardItem
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Nadal_dzia%C5%82ajaca_Nokia_1100_%282018_rok%29_Zakupiona_w_2005_roku._Obecnie_obs%C5%82uguje_polsk%C4%85_sie%C4%87_Play.jpg/1200px-Nadal_dzia%C5%82ajaca_Nokia_1100_%282018_rok%29_Zakupiona_w_2005_roku._Obecnie_obs%C5%82uguje_polsk%C4%85_sie%C4%87_Play.jpg"
              text='Yesterday lost my 1100 in metro'
              path='/services'
            />
           </ul>
        </div>
      </div>
      <h2>Found Documents</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
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
    </div>
  );
}

export default Cards;