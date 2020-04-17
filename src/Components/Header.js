import React  from 'react';
import { fadeIn } from 'react-animations'
import Radium, {StyleRoot} from 'radium';
import '../ComponentsView/Header.css'

const styles = {
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}

class Header extends React.Component{
  constructor(){
    super()
    this.state = {
      isShow: true
    }
  }

  getInitialState() {
    return {
      isMouseInside: false
    };
  }
  mouseEnter = () => {
    this.setState({ isMouseInside: true });
  }
  mouseLeave = () => {
    this.setState({ isMouseInside: false });
  }
  
  render(){
    return (
      <div className="Header" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
        {this.state.isMouseInside ? <StyleRoot><div className='buttonContainer' style={styles.fadeIn}>
          <button>Main</button>
          <button>About</button>
          <button>Portfolio</button>
          <button>Contacts</button>
        </div></StyleRoot>: null}
      </div>
    );
  }
  
}

export default Header;
