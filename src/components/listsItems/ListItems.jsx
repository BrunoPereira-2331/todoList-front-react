import React, { useState } from 'react'
import './ListItems.css'
import { OkButton } from '../buttons/OkButton.jsx'
import axios from 'axios'

const base_url = "http://localhost:8080"

const user = {
    id: 1,
    name: 'bruno',
    tasks: [
        {
            id: 1,
            name: 'limpar o carro',
            finished: false
        },
        {
            id: 2,
            name: 'ir ao mercado',
            finished: true
        },
        {
            id: 3,
            name: 'comprar um energy',
            finished: true
        }
    ]
}

const ListItem = () => {
    const [listItems, setListItem] = useState()
    axios(`${base_url}/tasks`)
        .then(response => createListItems(response.data))

    function createListItems(data) {
        setListItem(data)
        return null
    }

    return (
            <table className="list-items-table">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Finished</th>
                    </tr>
                </thead>
                <tbody>
                    {listItems?.map(elem => (
                        <tr key={elem.id} className="list-items-tr">
                            <td>{elem.description}</td>
                            <td></td>
                            <td>{elem.finished ? 'Finished' : 'Not finished'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
    )
}

export default ListItem

// export const ListItemInput = () => {
//     const [inputValue, setInputValue] = useState('');

//     const handleInputItem = event => {
//         setInputValue(event.target.value)
//     }

//     const addListItem = () => {
//         // Send a POST request
//         axios({
//             method: 'post',
//             url: `${base_url}/tasks`,
//             data: {
//                 description: inputValue,
//                 finished: false
//             }
//         });
//     }

//     return (
//         <div>
//             <input type='text'
//                 value={inputValue}
//                 onChange={handleInputItem}
//                 placeholder='Type a new task!'
//             />
//             <button onClick={addListItem}>ok</button>
//         </div>
//     )
// }
