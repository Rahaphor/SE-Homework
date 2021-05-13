import React from 'react'

const sentimentAnalysis =(props) =>{
    return(
        <div className ='Analysis' >
            <p id ='address'> Analysis </p>
            <h3> {props.numbers} </h3>
            <h3> {props.number2} </h3>
            <h3> {props.number3} </h3>

        </div>
    )
    
}
export default sentimentAnalysis;