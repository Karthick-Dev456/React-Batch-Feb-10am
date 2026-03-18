import React from 'react'
import { useNavigate } from 'react-router-dom'

const Tables = () => {

    const navigate = useNavigate()

    return (
        <div>

            <table>

                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Student Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Duration</th>
                    </tr>
                </thead>

                <tbody>

                    <tr>
                        <td>1</td>
                        <td>Sathish</td>
                        <td>30</td>
                        <td>Python Full Stack</td>
                        <td>4 Months</td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Darshita</td>
                        <td>30</td>
                        <td>Python Full Stack</td>
                        <td>4 Months</td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td>SasiKumar</td>
                        <td>20</td>
                        <td>Java Full Stack</td>
                        <td>4 Months</td>
                    </tr>

                    <tr>
                        <td>4</td>
                        <td>Illavaluthi</td>
                        <td>20</td>
                        <td>Java Full Stack</td>
                        <td>4 Months</td>
                    </tr>

                </tbody>

            </table>

            <button onClick={() => navigate('/list/rendering', {state: {framework: "Angular"}})}>List Rendering</button>
        
        </div>
    )
}

export default Tables
