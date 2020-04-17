import React  from 'react';
import '../ComponentsView/Header.css'


class Header extends React.Component{
  render(){
    return (
      <div className="Header">
        <button>Main</button>
        <button>About</button>
        <button>Portfolio</button>
        <button>Contacts</button>
      </div>
    );
  }
  
}

export default Header;
