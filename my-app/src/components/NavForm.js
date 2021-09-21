import React from 'react'


function NavForm(props) {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                    <label>
                    Username:
                    <input type="text"  />
                    </label>
                    <label>
                    Password:
                    <input type="password" />
                    </label>
                    <input type="submit" value="Submit" />
            </form> 
        </div>
    )
}

export default NavForm
