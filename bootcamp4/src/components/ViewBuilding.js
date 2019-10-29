import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const { data, building } = this.props;
		var val = data[building];

		return (
			<div>
				<h3>More Information</h3>
				<p>
					<tr key={val.id} >
					<tr>CODE: {val.code}</tr>
					<tr>NAME: {val.name}</tr>
					<tr>ADDRESS: {val.address}</tr>
					<tr>LAT: {val.coordinates["latitude"]}</tr>
					<tr>LNG: {val.coordinates["longitude"]}</tr>
					</tr>
				</p>
			</div>
		);
	}
}
export default ViewBuilding;
