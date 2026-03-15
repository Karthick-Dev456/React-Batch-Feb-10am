import React from 'react'

const Conditional = () => {

    let admin = false

    let result = null

    if (admin === true) {
        result = <h1>Welcome Admin</h1>
    }
    else {
        result =  <h1>Unknown User</h1>
    }

    let result2 = admin === true ? <h1>Welcome Admin</h1> : <h1>Unknown User</h1>

    let result3 = admin === true && <h1>Welcome Admin</h1>

    return (
        <div>
            {result}
        </div>
    )
}

export default Conditional
