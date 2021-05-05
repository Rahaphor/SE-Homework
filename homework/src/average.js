import React from 'react'

const Average =(props) =>{
    return(
        <div className ='AvgRating' >
            <p id ='address'> Average </p>
            <h3> {props.numbers} </h3>

        </div>
    )
    
}
export default Average;