import {React, Component} from 'react'
import styles from './menuUI.module.css'

const homeScreen = (props) => {
    return(
        <div className={styles.homeScreen}>
            <h1 className={styles.homeScreenH1}>Top of the Mornin'!</h1> {/* TODO: Randomize this message on launch */}
            <h6 className={styles.homeScreenH6}>So... What's new?</h6>
        </div>
    );
};

export default homeScreen;
