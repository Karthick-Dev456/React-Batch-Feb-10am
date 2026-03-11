import React from "react"

const Student = ({ student_name, course}) => {

    return (
        <div>
            <h1>My name is {student_name}</h1>
            <p>I'm studying {course}</p>
        </div>
    )
}

export default Student