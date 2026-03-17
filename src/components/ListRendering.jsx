import React from 'react'

const ListRendering = () => {

    const all_students = [
        {
            student_name: "Sasikumar",
            age: 20,
            course: "Python Full Stack"
        },
        {
            student_name: "Darshita",
            age: 20,
            course: "Python Full Stack"
        },
        {
            student_name: "Sathish",
            age: 20,
            course: "Python Full Stack"
        },
        {
            student_name: "Ramesh",
            age: 20,
            course: "Python Full Stack"
        }
    ]

    const student_list = all_students.map((student, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.student_name}</td>
                <td>{student.age}</td>
                <td>{student.course}</td>
            </tr>
        )
    })

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Student Name</th>
                        <th>Age</th>
                        <th>Course</th>
                    </tr>
                </thead>

                <tbody>
                    {student_list}
                </tbody>
            </table>
        </div>
    )
}

export default ListRendering
