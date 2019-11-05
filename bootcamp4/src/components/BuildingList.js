import React from 'react';


class BuilingList extends React.Component {
	selectedBuilding = (building) => {
		var selectedUpdate = this.props.selectedUpdate;
		selectedUpdate(building.id - 1);
	}
	
	render() {
		
		const { data, filterText } = this.props;
		
		const buildingList = data.filter(name=> {
			return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
			|| name.code.indexOf(filterText.toUpperCase()) >= 0
	
		})
		.map(directory => {
			return (
				<tr key={directory.id }>
					<td>{directory.code} </td>
					<td onClick={()=>this.selectedBuilding(directory )}> {directory.name} </td>
				</tr>
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
