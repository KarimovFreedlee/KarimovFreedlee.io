import React from 'react'
import { fadeInUp } from 'react-animations'
import Radium, {StyleRoot} from 'radium';
import '../ComponentsView/Contacts.css'

const styles = {
    fadeInUp: {
      animation: 'x 1s',
      animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    }
}

function Contacts(){
    return(
        <div className='Body'>
            <StyleRoot>
                <p style = {styles.fadeInUp}>
                    <div className = "iconContainer">
                    <img src="https://image.flaticon.com/icons/svg/2111/2111828.svg"/>
                    <img src="https://image.flaticon.com/icons/svg/2111/2111679.svg"/>
                    <img src="https://image.flaticon.com/icons/svg/2111/2111612.svg"/>
                    </div>
                </p>
            </StyleRoot>
        </div>
    )
}

export default Contacts