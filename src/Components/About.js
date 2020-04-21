import React from 'react'
import { fadeInUp } from 'react-animations'
import Radium, {StyleRoot} from 'radium';

const styles = {
    fadeInUp: {
      animation: 'x 1s',
      animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    }
}

function About(){
    return(
        <div>
            <StyleRoot>
                <p style ={styles.fadeInUp}>
                    This is info about me
                </p>
            </StyleRoot>
        </div>
    )
}

export default About;