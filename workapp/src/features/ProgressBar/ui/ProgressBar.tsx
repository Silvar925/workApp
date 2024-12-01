import React from "react";
import styles from "./ProgressBar.module.scss";

const ProgressBar: React.FC<{ min: number; max: number; value: number }> = ({
    min,
    max,
    value,
}) => {
    return (
        <div className={styles.progressBar}>
            <div className={styles.progressBar__labelsTop}>
                <span>{min}</span>
                <span>{max}</span>
            </div>

            <div className={styles.progressBar__bar}>
                <div
                    className={styles.progressBar__fill}
                    style={{ width: `${((value - min) / (max - min)) * 100}%` }}
                ></div>
            </div>
            
            <div
                className={styles.progressBar__labelBottom}
                style={{
                    left: `${((value - min) / (max - min)) * 100}%`,
                    transform: 'translateX(-50%)',
                }}
            >
                {value}
            </div>
        </div>
    );
};

export default ProgressBar;
