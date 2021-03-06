import React, { useState, useEffect } from 'react'
import './styles/todo.css'
import TodoList from './TodoList'
import TodoInput from './TodoInput'
import api from '../services/api'

const Todo = () => {

    const [listItems, setListItems] = useState()

    function updateListItems() {
        api.get(`tasks`)
            .then(response => setListItems(response.data))
    }

    useEffect(() => {
        api.get(`tasks`)
            .then(response => setListItems(response.data))
    }, []);

    return (
        <div>
            <TodoInput
                updateListItems={updateListItems}
            ></TodoInput>
            <TodoList
                setListItems={setListItems}
                updateListItems={updateListItems}
                listItems={listItems}
            ></TodoList>
        </div>
    )
}

export default Todo;


