import React from 'react';

class Search extends React.Component {
	filterUpdate() {
		
        this.props.filterUpdate(this.textInput.value)
	}
	render() {
		
		return (
			<form>
				<input type = "text"
    ref = {(value) => this.textInput = value}
    placeholder = "Type to filter..."
    onChange = {this.filterUpdate.bind(this)}
    />
			</form>
		);
	}
}
export default Search;
