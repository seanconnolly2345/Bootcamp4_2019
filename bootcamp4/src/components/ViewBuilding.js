import React from 'react';
import RemoveBuilding from './RemoveBuilding';

class ViewBuilding extends React.Component {
	
	render() {
		const { data, building, removeBuilding } = this.props;
		var tmp = data[building];
		let coordinates, top, id;

		// check if listing is valid
		try {
			top = <div>
				<tr>CODE: {tmp.code}</tr>
				<tr>NAME: {tmp.name}</tr>
				<tr>ADDRESS: {tmp.address}</tr>
			</div>
			id = tmp['id'];
		} catch(err) {
			top = <div>
				<tr>CODE: ""</tr>
				<tr>NAME: ""</tr>
				<tr>ADDRESS: ""</tr>
			</div>
			id = -1;
		}


		// check if coordinates is valid
		try {
			coordinates = <div>
				<tr>LAT: {tmp.coordinates["latitude"]}</tr>
				<tr>LNG: {tmp.coordinates["longitude"]}</tr>
			</div>
		}
		catch(err) {
			coordinates = <div>
				<tr>LAT: {""}</tr>
				<tr>LNG: {""}</tr>
			</div>
		}

		return (
			<div class="card">
          <h3>More Information</h3>
					<p>
						<tr key={id} >
							{top}
							{coordinates}
						</tr>
					</p>
					<RemoveBuilding removeBuilding={removeBuilding} />
			</div>
		);
	}
}
export default ViewBuilding;
