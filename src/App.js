import React, {useState} from "react";
import { IonApp, IonButton, IonContent, IonHeader, IonIcon, IonTitle, IonToast, IonToolbar } from "@ionic/react";
import { play as playIcon} from 'ionicons/icons';

function App() {
  const [showToast, setShowToast] = useState(false);
  const handleClick = () => {
    setShowToast(true);
    setTimeout(()=> setShowToast(false), 3000);
  };

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color='primary'>  <IonTitle backgroundColor="green">Tri Tag App</IonTitle></IonToolbar>

      </IonHeader>
            
      <IonContent className="ion-padding">
      <h6 style={{ fontSize:'15px'}}>Hello Tri Tag Team!</h6>

        
        <IonButton color='primary'  onClick={handleClick} style={{height:'2rem', margin:"1px"}} >
          <IonIcon icon={playIcon} slot='start'/>Start
        </IonButton>{" "}
        <IonToast color='primary' isOpen={showToast} message="Start Working!!!"   />
        
      </IonContent>
    </IonApp>
  );
}

export default App;
