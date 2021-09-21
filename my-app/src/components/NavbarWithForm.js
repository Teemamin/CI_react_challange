import React, { Component } from 'react'
import NavForm from './NavForm'
import stlyes from './css/NavBarSimple.module.css'



class Navbar extends Component{
    state={
        lgn : "login"

    }

    handleChange = ()=>{
        this.setState((prevState,prevProps)=>{
            return{
            //    msg: prevState.msg === "guest" ? "user" : "guest",
               lgn: prevState.lgn === "logout" ? "login" : "logout"
            }
        })   
    }

    render(){
        return(
            <div>
                <nav>
                    <h1 className={stlyes.NavBar}>Galary</h1>
                    <button onClick={this.handleChange}>{this.state.lgn}</button>
                </nav>
                
               {this.state.lgn === "logout" ? <NavForm handleSubmit={this.handleChange}/> : null}
            </div>
        )
    }
}
export default Navbar