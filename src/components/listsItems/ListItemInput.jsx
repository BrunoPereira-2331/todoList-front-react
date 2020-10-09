import React, { useState } from 'react'
import { OkButton } from '../buttons/OkButton.jsx'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


const base_url = "http://localhost:8080"

const ListItemInput = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputItem = event => {
        setInputValue(event.target.value)
    }

    const addListItem = () => {
        axios({
            method: 'post',
            url: `${base_url}/tasks`,
            data: {
                description: inputValue,
                finished: false
            }
        });
    }

    return (
        <div>
            <input type='text'
                value={inputValue}
                onChange={handleInputItem}
                placeholder='Type a new task!'
            />
            <button className="button-plus" onClick={addListItem}><FontAwesomeIcon icon={faPlus} className="button-icon-plus" /></button>
        </div>
    )
}

export default ListItemInput