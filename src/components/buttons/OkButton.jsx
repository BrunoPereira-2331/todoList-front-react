import React from 'react'
import './OkButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export const OkButton = () => {
    return <button><FontAwesomeIcon icon={faPlus} /></button>
}