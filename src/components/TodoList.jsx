import React from 'react'
import './styles/todoList.css'
import { faCheck, faTrashAlt, faRedo } from '@fortawesome/free-solid-svg-icons'
import api from '../services/api'
import { Button } from './Button'

const TodoList = (props) => {
    const { listItems, setListItems, updateListItems } = props

    const markAsDone = (updatedTask) => {
        if (!updatedTask.finished) {
            updatedTask.finished = true
            api.put(`tasks/${updatedTask.id}`, updatedTask)
                .then(resp => {
                    const updatedTask = resp.data
                    const updatedListItems = listItems.filter(elem => elem.id !== updatedTask.id)
                    updatedListItems.push(updatedTask)
                    setListItems(updatedListItems)
                })
        }
    }

    const markAsPending = (task) => {
        if (task.finished) {
            task.finished = false
            api.put(`tasks/${task.id}`, task)
                .then(resp => {
                    const updatedTask = resp.data
                    const updatedListItems = listItems.filter(elem => elem.id !== updatedTask.id)
                    updatedListItems.push(updatedTask)
                    setListItems(updatedListItems)
                })
        }
    }

    const deleteTask = (task) => {
        console.log('task', task)
        api.post('history', task)
        api.delete(`tasks/${task.id}`).then(resp => updateListItems())

    }

    function createTaskTable() {
        if (listItems?.length == 0) {
            return <h1>No task registered! :( </h1>
        } else {
            return (
                <div className="div-todo-list">
                    <table className="table-tasks">
                        <thead>
                            <tr>
                                <th className="thead-th table-th-description">Description</th>
                                {/* <th>Date</th> */}
                                <th className="thead-th table-th-status">Finished</th>
                                <th className="table-th-buttons" colSpan={3}></th>
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
                <tr key={task.id} className="table-tasks-tr">
                    <td className="table-tasks-description" >{task.description}</td>
                    {/* <td>{task.date}</td> */}
                    <td className={task.finished ? "table-tasks-status finished-task" : "table-tasks-status not-finished-task"}>
                        {task.finished ? 'Finished' : 'Not finished'}
                    </td>
                    <td className="table-buttons-td">
                        <Button icon={faCheck}
                            class={'default-button update-task-button'}
                            handleButtonClick={markAsDone} task={task}>
                        </Button>
                    </td>
                    <td className="table-buttons-td">
                        <Button icon={faRedo}
                            class={'default-button reset-task-button'}
                            handleButtonClick={markAsPending} task={task}>
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

export default TodoList