import React from 'react'
import MaterialTable from 'material-table'
import api from '../services/api.js'

export default () => {

	return (
		<div style={{ maxWidth: '100%' }}>
			<MaterialTable
			columns={[
				{ title: 'Description', field: 'description' },
				{ title: 'Finished', field: 'finished', type: 'boolean'},
			]}
			data={[
				{ description: 'Lavar o carro', finished: 'true' }, 
				{ description: 'Jogar cs', finished: '' }
			]}
			title="Todo List"
			editable={{
				onRowUpdate: (newData, oldData) => 
					new Promise((resolve, reject) => {
						console.log('newData', newData);
						console.log('oldData', oldData);
						api.put(`tasks/${oldData.id}`, newData).then(resp => resolve());
						reject();
					}),
				onRowDelete: (oldData) => 
					new Promise((resolve, reject) => {
						api.post('history', oldData)
						api.delete(`tasks/${oldData.id}`).then(resp => resolve());
						reject();
					})
			}}
			/>
		</div>
	)
}
