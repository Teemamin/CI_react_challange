import React from 'react'
import stlyes from './css/Sidebar.module.css'


function Sidebar(props){

    return(
        <div className={stlyes.sidebar}>
            <a>My Photographs</a>
            <a>My illustrations</a>
            <a>My Paintings</a>

        </div>
    )
}
export default Sidebar