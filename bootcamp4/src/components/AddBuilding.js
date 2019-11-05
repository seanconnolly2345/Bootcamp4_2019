import React from 'react';

class AddBuilding extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: ''
		}
	}

	formOpenUpdate() {
		this.props.formOpenUpdate(!this.props.formOpen)
	}
	addBuilding() {
		if (this.code.value === '' && this.name.value === '')
			this.setState({
				error: 'Enter a code and a name'
			})
		else if (this.code.value === '' && this.name.value !== '')
			this.setState({
				error: 'Enter a code'
			})
		else if (this.name.value === '')
			this.setState({
				error: 'Enter a name'
			})
		else {
			this.setState({
				error: ''
			})
			var listing = {
				code: this.code.value.toUpperCase(),
				name: this.name.value
			}
			if (this.latitude.value !== '' && this.longitude.value !== '')
				listing.coordinates = {
					latitude: this.latitude.value,
					longitude: this.longitude.value
				}
			if (this.address.value !== '')
				listing.address = this.address.value

			this.props.addBuilding(listing)

			this.formOpenUpdate()
		}
	}
	render() {
		const { formOpen } = this.props
		if (formOpen) {
			return (
				<div>
					<h4>New Building Details</h4>
					<p>{this.state.error}</p>
					<form className="addBuildingForm">
						<table>
							<tr>
								<td>
									Code:
								</td>
								<td>
									<input type="text" ref={value => this.code = value}/>
								</td>
							</tr>
							<tr>
								<td>
									Name:
								</td>
								<td>
									<input type="text" ref={value => this.name = value}/>
								</td>
							</tr>
							<tr>
								<td>
									Latitude:
								</td>
								<td>
									<input type="text" ref={value => this.latitude = value}/>
								</td>
							</tr>
							<tr>
								<td>
									Longitude:
								</td>
								<td>
									<input type="text" ref={value => this.longitude = value}/>
								</td>
							</tr>
							<tr>
								<td>
									Address:
								</td>
								<td>
									<input type="text" ref={value => this.address = value}/>
								</td>
							</tr>
						</table>
					</form>
					<button onClick={this.addBuilding.bind(this)}>Submit</button>
				</div>
			);
		}
		return(<button onClick={this.formOpenUpdate.bind(this)}>Add Building</button>)
	}
}
export default AddBuilding;