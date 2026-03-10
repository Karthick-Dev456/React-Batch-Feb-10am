import React from 'react'

const Form = () => {
    return (
        <div> <br /><br />

            <form>
                <label>Username: </label>
                <input type="text" /> <br /><br />

                <label>Password: </label>
                <input type="password" /><br /><br />

                <label>Age: </label>
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
                
                <br /><br />

                <input type="button" value="Submit" />
                <input type="reset" />
            </form>
        
        </div>
    )
}

export default Form
