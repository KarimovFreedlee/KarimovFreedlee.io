import React from 'react'
import { fadeInRight, fadeInUp } from 'react-animations'
import Radium, {StyleRoot} from 'radium';
import '../ComponentsView/About.css'

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
                <div className="body" style = {styles.fadeInUp}>
                <p className= "title">About</p>
                </div>
                <div className="arrow-down" style = {styles.fadeInUp} ></div>
            </StyleRoot>
        </div>
    )
}

export default About;