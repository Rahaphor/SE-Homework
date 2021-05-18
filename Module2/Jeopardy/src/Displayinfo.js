import React, { useState } from 'react'
import './App.css'

const ShowInfo = (props) => {

    const [score, setScore] = useState(0)
    const [answer, setAnswer] = useState('')

    const renderedTitle = props.question.map(info => {
        return (
            info.category.title
        )
    })


    const renderedQuestion = props.question.map(info => {
        return (
            info.question
        )
    })


    const displayAnswer = props.question.map(info => {
        return (
            (info.answer)
        )
    })

    const DisplayAnswer = () => {
        return (
            setAnswer(displayAnswer)
        )
    }

    const addScore = () => {
        setScore(score + 100)
        setAnswer('')
    }

    const subScore = () => {
        setScore(score - 100)
        setAnswer('')
    }

    const resetScore = () => {
        setScore(0)
        setAnswer('')
    }



    return (
        <div id='content'>
            <div className='ui cards'>
                <div className='card'>
                    <h1 style={{ textAlign: 'center' }}>SCORE: {score}</h1>
                    <div className='content'>
                        <button style={{backgroundColor:'blue', color:'red'}}  onClick={props.info} >Random Question</button>
                    </div>
                    <br />
                    <div>
                        <button style={{backgroundColor:'yellow', color:'green'}} onClick={addScore}>Increase</button>
                        <button style={{backgroundColor:'yellow', color:'Red'}} onClick={subScore}>Decrease</button>
                        <button style={{backgroundColor:'orange', color:'green'}} onClick={resetScore}>Reset</button>
                    </div>
                    <br />
                    <div>
                        <p><b>Category:</b> {renderedTitle}</p>
                        <p><b>Question:</b> {renderedQuestion}</p>
   
                    </div>
                    <br/>
                    <div>
                    <button style={{backgroundColor:'blue', color:'red'}} onClick={DisplayAnswer}>Click For Answer</button>
                    <p><b>Answer:</b> {answer}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowInfo;