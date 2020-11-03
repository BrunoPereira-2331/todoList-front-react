import React, { useState } from 'react'
import './styles/listItemInput.css'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import api from '../services/api.js'
import { Button } from './Button'

const ListItemInput = (props) => {

    const { updateListItems } = props

    const [inputValue, setInputValue] = useState('');

    const handleInputItem = event => {
        setInputValue(event.target.value)
    }

    const addListItem = (task) => {
        const data = {
            description: task,
            finished: false
        }
        api.post('tasks', data).then(resp => updateListItems())
        setInputValue('')
    }

    return (
        <div className="div-container">
            <input className="list-item-input" type='text'
                value={inputValue}
                onChange={handleInputItem}
                placeholder='Type a new task!'
            />
            <Button class={'default-button add-task-button'} icon={faPlus} handleButtonClick={addListItem} task={inputValue}></Button>
        </div>
    )
}

export default ListItemInput