import React from 'react'
import Main from './Main'
import About from './About'
import Portfolio from './Portfolio'
import Contacts from './Contatcts'
import {useSelector} from 'react-redux'
import '../ComponentsView/Body.css'


function Body (){

    const activePage = useSelector(state => state.activePage);

    return(
        <div className="Body">
            {activePage === "MAIN" ? <Main/>:
            activePage === "ABOUT" ? <About/>:
            activePage === "PORTFOLIO" ? <Portfolio/>:
            activePage === "CONTACTS" ? <Contacts/>: null}
        </div>
    );
    
}

export default Body