import {React, Component} from 'react'
import GameImages from './gameImages'
import styles from './menuUI.module.css'

import LucyGameLogo from '../assets/lucy.png'

const SidebarButton = (props) => {
    return(
        <button onClick={props.onclick} className={styles.navButton}>
            <h3 className={styles.homeScreenH1}>{props.buttonText}</h3>
        </button>
    );
};

export default SidebarButton;