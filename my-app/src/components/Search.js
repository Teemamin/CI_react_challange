import React, { Component } from 'react'
import names from '../names'

export class Search extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             search : '',
             importedNames : names,
             foundName : ''
        }
    }
    handleChange = (e)=>{
      let val =  e.target.value.toLowerCase()
      let filteredName = this.state.importedNames.filter(name=>name.toLocaleLowerCase().includes(val)
      )
      this.setState({importedNames:filteredName, search:val})

    }
    
    render() {
       let allNames = this.state.importedNames.map(n=><p key={n}>{n}</p>)
        return (
            <div>
                <h1>Name Search</h1>
                <p>Matching Name found:{this.state.importedNames.length}</p>
                <form>
                    <input type='text' name='search'value={this.state.search}
                     placeholder='Search' onChange={this.handleChange}/>
                </form>
                <div>{this.state.search}</div>
                {allNames}
            </div>
        )
    }
}

export default Search
