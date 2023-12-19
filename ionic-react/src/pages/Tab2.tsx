import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

import { useEffect, useState } from 'react';


const Tab2: React.FC = () => {

  let pathToYaml = '/data/sequences/bashar-principles.yaml'
  useEffect(() => {
    console.log(pathToYaml)
    fetch(pathToYaml)
      .then((response) => response.text())
      .then((yamlString) => load(yamlString))
      .then((data) => {
        console.log(data)
        // setLocation(data.location);
        // setYear(data.year);
      });
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sessions</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Session</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="Tab 2 page" /> */}
        <div className="text-center absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-center items-center">
          <div className="border border-gray-100 rounded-xl shadow-2xl p-8 bg-gradient-to-r from-green-400 via-blue-900 to-blue-400 text-white max-w-lg">
            <h1 className="text-2xl font-bold">Using TailwindCSS in Ionic with React</h1>
            <p className="mt-4">This is an example of how you can use <span className="font-bold">TailwindCSS</span> in an <span className="font-bold">Ionic</span> application using <span className="font-bold">React</span> framework.</p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
