import React, { useEffect } from 'react'
import './styles/todoHistory.css'
import { faTrashAlt, faRedo } from '@fortawesome/free-solid-svg-icons'
import api from '../services/api'
import { Button } from './Button'
import { useState } from 'react'

const History = props => {

    const historyData = { id: 1, description: 'lavar o carro', finished: true }
    const [listItems, setListItems] = useState([historyData]);

    useEffect(() => {
        api.get(`history`)
            .then(response => setListItems(response.data))
    }, []);

    const updateListItems = () => {
        api.get(`history`).then(resp => setListItems(resp.data))

    }

    const restoreTask = (task) => {
        api.post('tasks', task).then(resp => console.log(resp.data))
        api.delete(`history/${task.id}`).then(resp => updateListItems())
    }

    const deleteTask = (task) => {
        api.delete(`history/${task.id}`).then(resp => updateListItems())
    }

    function createTaskTable() {
        if (listItems?.length == 0) {
            return <h1 className="header-empty">There is no history here :)</h1>
        } else {
            return (
                <div className="div-todo-history">
                    <table className="table-history">
                        <thead>
                            <tr>
                                <th className="history-thead-th table-th-description">Description</th>
                                <th className="history-thead-th table-th-status">Finished</th>
                                <th className="history-table-th-buttons" colSpan={2}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {createTableData()}
                        </tbody>
                    </table >
                </div>
            )
        }
    }

    function createTableData() {
        return (
            listItems?.map(task => (
                <tr key={task.id} className="table-history-tr">
                    <td className="table-history-description" >{task.description}</td>
                    <td className={task.finished ? "table-history-status finished-task" : "table-history-status not-finished-task"}>
                        {task.finished ? 'Finished' : 'Not finished'}
                    </td>
                    <td className="table-buttons-td">
                        <Button icon={faRedo}
                            class={'default-button reset-task-button'}
                            handleButtonClick={restoreTask} task={task}>
                        </Button>
                    </td>
                    <td className="table-buttons-td tbody-delete-button-td">
                        <Button icon={faTrashAlt}
                            class={'default-button delete-task-button'}
                            handleButtonClick={deleteTask} task={task}>
                        </Button>
                    </td>
                </tr>
            ))
        )
    }

    return (
        createTaskTable()
    )
}

export default History
