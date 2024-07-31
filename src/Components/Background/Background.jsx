import React from "react";
import styles from "./Background.module.scss";

import background from "../../Assets/Images/bg.png";

const Background = () => {
    return (
        <>
            <div className={styles.bg_container}>
                <img src={background} alt="" className={styles.bg_img} />
            </div>
        </>
    )
}

export default Background;