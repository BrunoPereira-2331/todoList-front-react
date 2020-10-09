import React from 'react'
import ListItem from '../listsItems/ListItems'
import ListItemInput from '../listsItems/ListItemInput'
import './TodoList.css'

const List = () => {
    return (
        <div>
            <ListItemInput></ListItemInput>
            <ListItem></ListItem>
        </div>
    )
}

export default List;


