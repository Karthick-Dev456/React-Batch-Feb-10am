import React from 'react'

const Events = () => {

    const ShowData = (a, b) => {
        console.log("React Application")
        console.log(a, b)
    }


    return (
        <div>
            <button onClick={() => ShowData(3, 4)}>Click Here</button>
        </div>
    )
}

export default Events