import React, { useState } from 'react'

const Form = () => {

    const [user_name, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const DataHandler = () => {
        // console.log(user_name, password)
        const login_data = {
            username: user_name,
            password: password
        }
        console.log(login_data)
    }

    return (
        <div>

            <form>
                <label>Username: </label>
                <input type="text" value={user_name} onChange={(event) => setUserName(event.target.value)}/> <br /><br />

                <label>Password: </label>
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} /><br /><br />

                <input type="button" value="Submit" onClick={DataHandler} />

                {/* <label>Age: </label>
                <input type="number" /> <br /><br />

                <label>Feedback: </label>
                <textarea></textarea> <br /><br />

                <label>Select your country:</label>
                <select>
                    <option value="ind">India</option>
                    <option value="aus">Australia</option>
                    <option value="nz">New Zealand</option>
                    <option value="eng">England</option>
                </select> 
                
                <br /><br /> */}

                {/* <input type="reset" /> */}
            </form>
        
        </div>
    )
}

export default Form
