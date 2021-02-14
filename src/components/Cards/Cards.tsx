import React, { FunctionComponent } from 'react';
import CardItem from './CardItem';
import './cards.css';
import BeefNoodle from '../../img/beef-noodle.jpg'
import PepperBun from '../../img/pepper-bun.jpg'
import BraisedPork from '../../img/braised-pork.jpg'
import Dumpling from '../../img/soup-dumpling.jpg'
import StreetFood from '../../img/street-food.jpg'


const Cards: FunctionComponent = () => {
  return (
    <div className='cards'>
    <h1>Check out our year!</h1>
    <div className='cards__container'>
      <div className='cards__wrapper'>
        <ul className='cards__items'>
          <CardItem
            src={StreetFood}
            text='We did a super awesome thing!'
            label='Adventure'
            path='/vacations'
          />
          <CardItem
            src={BeefNoodle}
            text='We did a super awesome thing'
            label='Vacation'
            path='/vacations'
          />
        </ul>
        <ul className='cards__items'>
          <CardItem
            src={PepperBun}
            text='We did a super awesome things'
            label='Event'
            path='/events'
          />
          <CardItem
            src={BraisedPork}
            text='We did a super awesome thing'
            label='Food'
            path='/events'
          />
          <CardItem
            src={Dumpling}
            text='We did a super awesome thing'
            label='Wedding'
            path='/weddings'
          />
        </ul>
      </div>
    </div>
  </div>
  );
}

export default (Cards);