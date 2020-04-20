import React from 'react'
import { fadeIn, fadeOut } from 'react-animations'
import Radium, {StyleRoot} from 'radium';
import { useDispatch } from 'react-redux'
import {changeToAbout, changeToContacts, changeToMain, changeToPortfolio} from '../Store/Actions/HeaderActions'


const styles = {
    fadeIn: {
      animation: 'x 0.5s',
      animationName: Radium.keyframes(fadeIn, 'fadeIn')
    },
    fadeOut: {
      animation: 'x 1s',
      animationName: Radium.keyframes(fadeOut, 'fadeOut')
    }
  }



function Buttons (){
    const dispatch = useDispatch();
    return(
           <div>
            <StyleRoot><div className='buttonContainer' style={styles.fadeIn}>
            <button onClick ={() => dispatch(changeToMain)}>Main</button>
            <button onClick ={() => dispatch(changeToAbout)}>About</button>
            <button onClick ={() => dispatch(changeToPortfolio)}>Portfolio</button>
            <button onClick ={() => dispatch(changeToContacts)}>Contacts</button>
            </div></StyleRoot>
        </div>
    );

}

export default Buttons;