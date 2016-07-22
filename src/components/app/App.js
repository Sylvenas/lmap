import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../search/Search';
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

        var h1Style = {
            position: 'absolute',
            left: '500px',
            zIndex: '1000'
        };


        return (
            <div>
                <Search callbackParent={this.onSearchValChanged}/>
                <Map searchVal={this.state.val}/>
                <h1 style={h1Style}>QQQQ</h1>
            </div>
        )
    }
}

export default App