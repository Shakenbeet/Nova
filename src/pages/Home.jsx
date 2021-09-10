import {React, Component} from 'react'
import styles from './pageUI.module.css'

const Home = (props) => {
    return(
        <div className={styles.parenDiv}>
            <h1 className={styles.headerText}>Top of the Mornin'!</h1> {/* TODO: Randomize this message on launch */}
            <h6 className={styles.subtitleText}>So... What's new?</h6>
        </div>
    );
};

export default Home;