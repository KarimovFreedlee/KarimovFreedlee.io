import React from 'react'
import { fadeInLeft } from 'react-animations'
import Radium, {StyleRoot} from 'radium';
import '../ComponentsView/Contacts.css'

const styles = {
    fadeInLeft: {
      animation: 'x 1s',
      animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    }
}

function Contacts(){
    return(
        <div className='Body'>
            <StyleRoot>
                <div className = "iconContainer" style = {styles.fadeInLeft}>
                    <img src="https://image.flaticon.com/icons/svg/2111/2111828.svg"/>
                    <img src="https://image.flaticon.com/icons/svg/2111/2111679.svg"/>
                    <img src="https://image.flaticon.com/icons/svg/2111/2111612.svg"/>
                </div>
            </StyleRoot>
        </div>
    )
}

export default Contacts