import React, { FunctionComponent } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Cards from '../../Cards/Cards';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./home.css";

const Home: FunctionComponent = () => {
  // const images = [
  //   { url: BeefNoodle},
  //   { url: PepperBun},
  //   { urL: BraisedPork},
  //   { urL: Dumpling},
  //   { urL: StreetFood}
  // ];

  const images = [
    { url: "http://cdn.cnn.com/cnnnext/dam/assets/150520113507-best-taiwanese-food--1braised-pork-lurou-rice.jpg" },
    { url: "https://okinawa.stripes.com/sites/default/files/styles/community_site_carousel_750x500/public/article-images/taiwan-dumplings_0.jpg?itok=mPPEf5PK" },
    { url: "http://cdn.cnn.com/cnnnext/dam/assets/150520113853-best-taiwanese-food--2beef-noodle.jpg" },
  ];

  const renderImage = (url: string) => {
    return (
      <div>
        <img src={url}/>
      </div>
    );
  }
  return (
    <div>
      <div>
        <Carousel
          autoPlay
          dynamicHeight
          infiniteLoop
          swipeable
          width="80%"
        >
          {images.map(img => renderImage(img.url))}
        </Carousel>
      </div>
      <Cards />
    </div>
  );
}

export default (Home);