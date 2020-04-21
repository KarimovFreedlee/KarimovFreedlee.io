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
                <p style = {styles.fadeInUp}>
                    This is my projects
                </p>
            </StyleRoot>
        </div>
    )
}

export default Portfolio