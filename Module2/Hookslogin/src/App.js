import React from 'react'
import Form from './Form'
const App = () => {
    const username = 'rasheed';
    const password = 'aphorlaby';
    return (
        <div>
            <Form username={username} password={password} />
        </div>
    )
}
export default App;
