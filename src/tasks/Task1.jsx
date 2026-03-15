import React, { useState } from 'react'

const Task1 = () => {

    const [age, setAge] = useState('')
    const [result, setResult] = useState('')

    const DataHandler = () => {

        if (age < 18) {
            setResult(<p>You are not eligible to vote</p>)
        }
        else {
            setResult(<p>You are eligible to vote</p>)
        }
    }

    return (
        <div>
            <label>Age: </label>
            <input type="number" value={age} onChange={(event) => setAge(event.target.value)} />

            <input type="button" value="Submit" onClick={DataHandler} />

            {result}
        </div>
    )
}

export default Task1
