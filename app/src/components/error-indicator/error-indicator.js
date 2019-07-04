import React from 'react'
import './error-indicator.css'
import img from './jek-porkins-star-wars.jpg'

const ErrorIndicator = () => {
    return (
        <div className="error-indicator col-12">
            <img src={img} alt="error img"/>
            <br/>
            <span className="oops">Oops!</span>
            <br/>
            <span>
                Something has gone wrong
            </span>
            <br/>
            <span>
                (but we already send message to the right people)
            </span>
        </div>
    )
}

export default ErrorIndicator