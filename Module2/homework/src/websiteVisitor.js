import React from 'react'

const websiteVisitor =(props) =>{
    return(
        <div className ='WebsiteVisitors' >
            <p id ='address'> Visitor </p>
            <h3> {props.numbers} </h3>

        </div>
    )
    
}
export default websiteVisitor;