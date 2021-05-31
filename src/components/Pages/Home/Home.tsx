import React, { FunctionComponent } from 'react';
import Cards from '../../Cards/Cards';
import Footer from '../../Footer/Footer';
import SimpleImageSlider from "react-simple-image-slider";

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
    { url: "https://www.travel.taipei/Content/images/content/must-visit/top-food-02.jpg" },
    { url: "https://img.republicworld.com/republic-prod/stories/promolarge/xxhdpi/s5uioaxzilpgwpla_1581675806.jpeg?tr=w-758,h-433" },
  ];
  return (
    <div>
      <div/>
      {/* https://www.npmjs.com/package/react-simple-image-slider */}
        <SimpleImageSlider
          width={896}
          height={504}
          images={images}
          showBullets={true}
          showNavs={true}
          style={{ display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',}}
        />
        <Cards />
        <Footer />
    </div>
  );
}

export default (Home);