import React from 'react';
import GameButton from './navigationButton';

import logo from '../assets/novaLogo.png'

import styles from './menuUI.module.css'

const Navbar = (props) => {
    return (
        <div className={styles.navBar}>
            <img src={logo} className={styles.logo}/>
            <GameButton buttonText="🏠 Home"/>
            <GameButton buttonText="🎮 Games"/>
            <GameButton buttonText="📱 App"/>
            <GameButton buttonText="👤 Account"/>
        </div>
    );
};

export default Navbar;