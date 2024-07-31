import React from "react";
import styles from "./ListThings.module.scss";

import Thing from "../Thing/Thing";

const ListThings = ({things_data, getThingIndexToApp, getThingIndexToAppForDelete}) => {

    function getThingIndex(index){
        getThingIndexToApp(index);
    }

    function getThingIndexForDelete(index){
        getThingIndexToAppForDelete(index);
    }

    return (
        <>
            <div className={styles.list_things_container}>

                {things_data.map((item) => (
                    <Thing thing_text={item.text} key={item.id} index={item.id} getThingIndex={getThingIndex} getThingIndexForDelete={getThingIndexForDelete} isCompleted={item.isCompleted}></Thing>
                ))}
            </div>
        </>
    )
}

export default ListThings;