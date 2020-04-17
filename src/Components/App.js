import React  from 'react';
import Header from './Header'
import Body from './Body'
import '../ComponentsView/App.css'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      onHeader: false
    };
  }


  render(){
    return (
      <div className="App">
        <Header/>
        <Body/>
      </div>
    );
  }

}

export default App;
