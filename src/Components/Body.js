import React from 'react'
import Main from './Main'
import About from './About'
import {useSelector} from 'react-redux'
import '../ComponentsView/Body.css'

function Body (){

    const activePage = useSelector(state => state.activePage);

    return(
        <div className="Body">
            {activePage === "MAIN" ? <Main/>:
            activePage === "ABOUT" ? <About/>:
            null}
        </div>
    );
    
}

export default Body