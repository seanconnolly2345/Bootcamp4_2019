import React from 'react';

class AddBuilding extends React.Component {
		constructor (props) {
				super(props);
				this.state = {
						name: '',
						address: '',
						latitude: '',
						longitude: '',
						code: ''
				};
		}

		modify(val) {
				this.setState({[val.target.name]: val.target.value});
		}

		onSubmit(v) {
				v.preventDefault();

				const { data } = this.props;

				const newdata = data[data.length - 1];
				const newid = newdata.id;

				const building = {
						id: newid+1,
						name: this.state.name,
						code: this.state.code,
						address: this.state.address,
						coordinates: {
								latitude: this.state.latitude,
								longitude: this.state.longitude
						}
				}

				

				this.props.updateData(building);
		}

	render() {
		return (
			<form>
				<label>
					Name: 
					<input name="name" value={this.state.name} onChange={val => this.modify(val)}/>
				</label>
				<br />
				<label>
					Address: 
					<input name="address" value={this.state.address} onChange={val => this.modify(val)}/>
				</label>
				<br />
				<label>
					Code: 
					<input name="code" value={this.state.code} onChange={val => this.modify(val)}/>
				</label>
				<br />
				<label>
					Latitude:
					<input name="latitude" value={this.state.latitude} onChange={val => this.modify(val)}/>
				</label>
				<br />
				<label>
					Longitude:
					<input name="longitude" value={this.state.longitude} onChange={val => this.modify(val)}/>
				</label>
				<br />
				<button onClick={(v) => this.onSubmit(v)}>Send</button>
			</form>
		);
	}
}
export default AddBuilding;