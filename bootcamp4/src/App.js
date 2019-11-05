import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import RemoveBuilding from './components/RemoveBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: this.props.data,
      filterText: '',
      selectedBuilding: 0,
      data: this.props.data
    };
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
  })
  }

  selectedUpdate(id) {
    this.setState({
      selectedBuilding: id
  })
  }
  
  removeSelectedBuilding() {
		var listings = this.state.listings.filter(listing => {return listing.id !== this.state.selectedBuilding})
    this.setState({
      listings: listings
    })
  }



  updateData(building) {
    let local_data = this.state.data;
    local_data.push(building);
    this.setState({data: local_data});
}

removeData(building_id) {
    let local_data = this.state.data;
    local_data.splice(building_id, 1);
    this.setState({data: local_data});
}


  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search filterText = {this.state.filterText}
        filterUpdate = {this.filterUpdate.bind(this)}/>
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
              <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.props.data}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                    
                  />
                  
               </table>
              </div>
            </div>
            <div className="column2">
            <div className="card">
            <ViewBuilding
                data={this.props.data}
                selectedBuilding={this.state.selectedBuilding}
                building={this.state.selectedBuilding}
                listings={this.state.listings}
                
              />
              <RemoveBuilding
				selectedBuilding={this.state.selectedBuilding}
				removeData={this.removeData.bind(this)}
				data={this.state.data}
			  />
              </div>
              <div className="card">
              <AddBuilding
			    updateData={this.updateData.bind(this)}
			    data={this.state.data}
		    />
                </div>
              
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
