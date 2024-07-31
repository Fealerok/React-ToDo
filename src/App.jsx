import { useEffect, useState } from "react";
import styles from "./App.module.scss";

import Background from "./Components/Background/Background";
import Input from "./Components/Input/Input";
import ListThings from "./Components/ListThings/ListThings";

function App() {

  const [thingsData, setThingsData] = useState(() => {
    const savedData = localStorage.getItem("thingsData");
    return savedData ? JSON.parse(savedData) : [];
  });

  function getInputText(input_text) {
    const newThing = {
      id: thingsData.length ? thingsData[thingsData.length - 1].id + 1 : 1,
      text: input_text,
      isCompleted: false
    };

    setThingsData(prevThingsData => [...prevThingsData, newThing]);
  }

  function getThingIndexToApp(index){
      const updatedListThings= thingsData.map((thing) => {
        if (thing.id === index){
          return {...thing, isCompleted: !thing.isCompleted}
        }

        return thing;
      });

      setThingsData(updatedListThings);

  }

  function getThingIndexToAppForDelete(index){
    const updatedListThings = thingsData.filter(thing => thing.id !== index);
   setThingsData(updatedListThings);

  }

  useEffect(() => {
    localStorage.setItem("thingsData", JSON.stringify(thingsData));
  }, [thingsData]);

  return (
    <>
      <div className={styles.wrapper_content}>
        <div className={styles.wrapper}>
          <Input getInputText={getInputText}></Input>
          <ListThings things_data={thingsData} getThingIndexToApp={getThingIndexToApp} getThingIndexToAppForDelete={getThingIndexToAppForDelete}></ListThings>
        </div>
        <Background></Background>
      </div>
    </>
  );
}

export default App;
