import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';


import { useEffect, useState } from 'react';
import { load } from 'js-yaml';

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1
//   }
// };

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
import 'swiper/css/bundle';
import { car } from 'ionicons/icons';

const Tab1: React.FC = () => {

  const [nodes, setNodes] = useState([]);

  let cards = nodes.map((card) => {
    let description = 'test';
    // if (move > 0) {
    //   description = 'Go to move #' + move;
    // } else {
    //   description = 'Go to game start';
    // }
    return (
      <div key={card} className="container">
        {card}
        <button onClick={() => {
          console.log('click')
        }}>{description}</button>
      </div>
    );
  })

  // /ionic-react/public
  let pathToYaml = '/data/sequences/bashar-principles.yaml'

  // https://react.dev/reference/react/useEffect
  useEffect(() => {
    console.log(pathToYaml)
    fetch(pathToYaml)
      .then((response) => response.text())
      .then((yamlString) => load(yamlString))
      .then((data) => {
        console.log(data)
        setNodes(data.statements)
        // setLocation(data.location);
        // setYear(data.year);


      });
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Protocols</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Protocols</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="Tab 1 page" /> */}
        {/* <Carousel 
        responsive={responsive} 
        className="frameCarousel">
          {nodes.map((card, index) => (
            <div key={card} 
            className="carouselCard">
              {card} Name
              <button onClick={() => {
                console.log('click')
              }}>{card}</button>
            </div>
          ))}
        </Carousel> */}

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >

          {nodes.map((card, index) => (
            <SwiperSlide key={card}>
              <div className="text-center absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-center items-center">
                <div className="border border-gray-100 rounded-xl shadow-2xl p-8 bg-gradient-to-r from-green-400 via-blue-900 to-blue-400 text-white max-w-lg">
                  <p className="text-2xl font-bold">{card}</p>
                  <p className="mt-4">...</p>
                </div>
              </div>
              {/* <h1 className="text-5xl font-bold underline">
                Hello world!
              </h1>
              {card}
              <button onClick={() => {
                console.log('click')
              }}>{index}</button> */}
            </SwiperSlide>
          ))}

        </Swiper>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
