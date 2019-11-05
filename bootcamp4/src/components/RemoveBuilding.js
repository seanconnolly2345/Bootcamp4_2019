import React from 'react';

class RemoveBuilding extends React.Component {

onSubmit(v) {
	v.preventDefault();
	const building_id = this.props.selectedBuilding;
	const { data } = this.props;
	let idx = data.findIndex(x => x.id === building_id + 1);

	this.props.removeData(idx);
}

render() {
return (
<form>
	<button onClick={(v) => this.onSubmit(v)}>Delete Building</button>
</form>
);
}
}
export default RemoveBuilding;