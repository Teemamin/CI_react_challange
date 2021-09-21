import React, { Component } from 'react'
import stlyes from './css/NavBarSimple.module.css'



class Navbar extends Component{
    state={
        msg : "guest",
        lgn : "login"

    }

    handleChange = ()=>{
        // this.state.msg == "guest" ? this.setState({msg:"user",lgn:"logout"}) : this.setState({msg:"guest",lgn:"login"})
        this.setState((prevState,prevProps)=>{
            return{
               msg: prevState.msg === "guest" ? "user" : "guest",
               lgn: prevState.lgn === "logout" ? "login" : "logout"
            }
        })
        
    }
    render(){
        return(
            <div>
                <nav>
                    <ul>
                        <li className={stlyes.NavBar}>Galary</li>
                    </ul>
                    <button onClick={this.handleChange}>{this.state.lgn}</button>
                </nav>
                <p>{this.state.msg}</p>
            </div>
        )
    }
}
export default Navbar