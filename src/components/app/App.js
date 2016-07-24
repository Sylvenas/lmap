import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../search/Search';
import ToolBar from '../toolBar/ToolBar'
import Map from '../map/Map'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            val: ''
        }
        this.onSearchValChanged = this.onSearchValChanged.bind(this)
    }
    onSearchValChanged(newVal) {
        this.setState({
            val: newVal
        });
    }
    render() {
        return (
            <div>
                <Search callbackParent={this.onSearchValChanged}/>
                <Map searchVal={this.state.val}/>
                <ToolBar></ToolBar>
            </div>
        )
    }
}

export default App