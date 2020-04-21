import React from 'react'
import { fadeInUp } from 'react-animations'
import Radium, {StyleRoot} from 'radium';

const styles = {
    fadeInUp: {
      animation: 'x 1s',
      animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    }
}

function Portfolio(){
    return(
        <div className='Body'>
            <StyleRoot>
                <p className='title' style = {styles.fadeInUp}>
                    This is my projects
                </p>
                <div className="arrow-down" style = {styles.fadeInUp}></div>
            </StyleRoot>
        </div>
    )
}

export default Portfolio