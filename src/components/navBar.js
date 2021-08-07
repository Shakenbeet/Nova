import React from 'react';
import GameButton from './gameButton';

import logo from '../assets/novaLogo.png'
import LucyGameIcon from '../assets/lucy.png';
import DragonGameIcon from '../assets/DragonGame.png';
import AsteroidGameIcon from '../assets/AsteroidGame.png';
import FlapGameIcon from '../assets/FlapGame.png'

import styles from './menuUI.module.css'

const Navbar = (props) => {
    return (
        <div className={styles.navBar}>
            <img src={logo} className={styles.logo}/>
            <GameButton title="The Hobbit Video Game" src={DragonGameIcon}/>
            <GameButton title="Asteroid XL" src={AsteroidGameIcon}/>
            <GameButton title="Flappuccino" src={FlapGameIcon}/>
            <GameButton title="Lucy Simulator" src={LucyGameIcon}/>
        </div>
    );
};

export default Navbar;