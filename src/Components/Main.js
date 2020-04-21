import React from 'react'
import { fadeInUp } from 'react-animations'
import Radium, {StyleRoot} from 'radium';

const styles = {
    fadeInUp: {
      animation: 'x 1s',
      animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    }
}

function Main(){
    return(
        <div className='Body'>
            <StyleRoot>
                <p className='title' style = {styles.fadeInUp}>
                    Welcome to my portfolio
                </p>
            </StyleRoot>
        </div>
    )
}

export default Main;