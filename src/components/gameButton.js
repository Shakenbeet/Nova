import {React, Component} from 'react'
import GameImages from './gameImages'
import styles from './menuUI.module.css'

import LucyGameLogo from '../assets/lucy.png'

const GameButton = (props) => {
    return(
        <button onClick={props.onclick} title={props.title} className={styles.gameButton}>
            <GameImages src={props.src}/>
        </button>
    );
};

export default GameButton;