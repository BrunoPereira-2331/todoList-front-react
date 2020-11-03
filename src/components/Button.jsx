import React from 'react'
import './styles/button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Button = (props) => {

    const task = props.task

    function handleClick() {
        props.handleButtonClick(task)
    }

    return <button onClick={handleClick}
        className={props.class}>
        <FontAwesomeIcon icon={props.icon} />
    </button>
}