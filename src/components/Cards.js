import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>LET'S CHECK WHAT WE HAVE</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore about the Hyper Text Markup Language '
              label='HTML'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Explore the Cascading Style Sheets '
              label='CSS'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Know about the Programming'
              label='PROGRAMMING'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Make your own website more attractive using React'
              label='REACT JS'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Explore the working of the Java Script'
              label='JAVA SCRIPT'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;