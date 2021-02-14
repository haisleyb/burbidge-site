import React, { FunctionComponent } from 'react';
import Cards from '../../Cards/Cards';
import Footer from '../../Footer/Footer';


const Home: FunctionComponent = () => {
  return (
    <div>
      <div className="home"/>
        <Cards />
        <Footer />
    </div>
  );
}

export default (Home);