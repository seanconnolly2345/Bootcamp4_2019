import React from 'react';

class BuilingList extends React.Component {
	tappedBuilding = (building) => {
		var selectedUpdate = this.props.selectedUpdate;
		//console.log(building.name + ' ID: ' + building.id);
		selectedUpdate(building.id);
	}
	
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filterText } = this.props;
		
		const buildingList = data.filter(name=> {
			return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
	
		})
		.map(directory => {
			return (
				<tr key={directory.id}>
					<td>{directory.code} </td>
					<td onClick={()=>this.tappedBuilding(directory)}> {directory.name} </td>
				</tr>
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
