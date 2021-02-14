import React, { FunctionComponent } from 'react';
import Cards from '../../Cards/Cards';
import Footer from '../../Footer/Footer';
import Image from '../../../img/bento-box.jpg'


const Home: FunctionComponent = () => {
  return (
    <div>
     <img src={Image} alt="bento"/>
        <Cards />
        <Footer />
    </div>
  );
}

export default (Home);