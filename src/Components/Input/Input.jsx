import React, { useRef } from "react";
import styles from "./Input.module.scss";

const Input = ({getInputText}) => {

    const inputRef = useRef(null);

    function handleButtonClick() {
        getInputText(inputRef.current.value);
        inputRef.current.value = "";
    }

    return (
        <>
            <div className={styles.input_container}>
                <form action="" className={styles.input_form}>
                   <label htmlFor="" className={styles.input_label}>Введите текст:</label>
                    <input type="text" className={styles.input} placeholder="Введите текст:" ref={inputRef} />
                </form>
                <button className={styles.input_button} onClick={handleButtonClick}>Add</button>
            </div>
        </>
    )
}

export default Input;