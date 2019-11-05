import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: this.props.data,
      filterText: '',
      selectedBuilding: 0,
      addBuildingFormOpen: false
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
  addBuilding(building) {
    // set the new building's id to the last building's id + 1
    building.id = this.state.listings[this.state.listings.length - 1].id + 1;
    var listings = [...this.state.listings, building]
    this.setState({
      listings: listings,
      selectedBuilding: building.id,
      addBuildingFormOpen: false
    })
  }

  formOpenUpdate(value) {
    this.setState({
      addBuildingFormOpen: value
    })
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
                    //removeBuilding={this.removeBuilding.bind(this)}
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
                removeBuilding={this.removeSelectedBuilding.bind(this)}
              />
              </div>
              <div className="card">
                <AddBuilding 
                  addBuilding={this.addBuilding.bind(this)} 
                  formOpen={this.state.addBuildingFormOpen} 
                  formOpenUpdate={this.formOpenUpdate.bind(this)}
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
