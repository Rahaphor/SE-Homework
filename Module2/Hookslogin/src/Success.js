import React from 'react'
const Success = (props) => {
    return (
        <h1 style={{ color: 'green' }}>
            Welcome, {props.username}!
        </h1>
    )
}
export default Success