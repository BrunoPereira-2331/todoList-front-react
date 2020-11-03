import React, { useState, useEffect } from 'react'
import './styles/todoList.css'
import ListItem from './ListItems'
import ListItemInput from './ListItemInput'
import api from '../services/api'

const TodoList = () => {

    const [listItems, setListItems] = useState()

    function updateListItems(inputValue) {
        api.get(`tasks`)
            .then(response => setListItems(response.data))
    }

    useEffect(() => {
        api.get(`tasks`)
            .then(response => setListItems(response.data))
    }, []);

    return (
        <div>
            <ListItemInput
                updateListItems={updateListItems}
            ></ListItemInput>
            <ListItem
                setListItems={setListItems}
                updateListItems={updateListItems}
                listItems={listItems}
            ></ListItem>
        </div>
    )
}

export default TodoList;


