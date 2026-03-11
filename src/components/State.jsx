import React, { useState } from 'react'

const State = () => {

    const [language, setLanguage] = useState("HTML")

    return (
        <div>
            <h1>The language is {language}</h1>

            <button onClick={() => setLanguage("CSS")}>Change Language</button>
        </div>
    )
}

export default State