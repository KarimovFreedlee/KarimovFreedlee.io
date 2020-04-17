import React  from 'react';
import '../ComponentsView/Header.css'


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
        {this.state.isMouseInside ? <div className='buttonContainer'>
          <button>Main</button>
          <button>About</button>
          <button>Portfolio</button>
          <button>Contacts</button>
        </div>: null}
      </div>
    );
  }
  
}

export default Header;
