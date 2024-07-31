import React, { useReducer, useRef } from "react";
import styles from "./Thing.module.scss";
import basket_img from "../../Assets/Images/Basket.png";

const Thing = ({thing_text, index, getThingIndex, getThingIndexForDelete, isCompleted}) => {

    const thingForDeleteRef = useRef(null);

    function handleClickThing(){
        getThingIndex(index);
    }

    function handleClickDeleteThing(event){
        event.stopPropagation();
        getThingIndexForDelete(index);
    }

    return (
        <>
            <div className={`${styles.thing_container} ${isCompleted ? styles.completed : styles.not_completed}`} ref={thingForDeleteRef} onClick={handleClickThing}>
                <span>{thing_text}</span>
                <button className={styles.delete_thing} onClick={handleClickDeleteThing}> 
                    <img src={basket_img} alt="" className={styles.delete_thing_icon} />
                </button>
            </div>
        </>
    )
}

export default Thing;