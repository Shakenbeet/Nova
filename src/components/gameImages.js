import {React, Component} from 'react';
import styles from './menuUI.module.css';

const GameImages = (props) => {
    return(
        <img src={props.src} alt="Game Image" className={styles.gameImage}/>
    );
};

export default GameImages;