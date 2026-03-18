import React, { useState } from 'react'
import { useRef } from 'react'

const Reference = () => {

    const inputRef = useRef(null)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const SubmitForm = () => {
        console.log(username, password)
        setPassword("")
        setUsername('')

        inputRef.current.focus()
    }

    return (
        <div>
            <form>
                <label>Username</label>
                <input type="text" autoFocus ref={inputRef} value={username} onChange={(event) => setUsername(event.target.value)} />
                <br /><br />

                <label>Password</label>
                <input type="password"  value={password} onChange={(event) => setPassword(event.target.value)} />
                <br /><br />

                <input type="button" value="Submit" onClick={SubmitForm} />
            </form>
        </div>
    )
}

export default Reference
