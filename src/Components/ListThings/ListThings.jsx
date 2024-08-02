import React from "react";
import styles from "./ListThings.module.scss";

import Thing from "../Thing/Thing";

const ListThings = ({things_data, getThingIndexToApp, getThingIndexToAppForDelete, isCompleted}) => {

    function getThingIndex(index){
        getThingIndexToApp(index);
    }

    function getThingIndexForDelete(index){
        getThingIndexToAppForDelete(index);
    }
    
    let tasks = [];

    {isCompleted ? tasks = things_data.filter(task => task.isCompleted === true) : tasks = things_data}

    return (
        <>
            <div className={styles.list_things_container}>

                <ul className={styles.list}>
                    {tasks.map((item) => (
                        <li key={item.id}>
                             <Thing thing_text={item.text} index={item.id} getThingIndex={getThingIndex} getThingIndexForDelete={getThingIndexForDelete} isCompleted={item.isCompleted}></Thing>
                        </li>
                    ))}
                </ul> 
            </div>
        </>
    )
}

export default ListThings;