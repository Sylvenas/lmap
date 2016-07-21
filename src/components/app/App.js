import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../search/Search';
import Map from '../map/Map'

class App extends React.Component {
    render() {
        return (
            <div>
                <Search/>
                <Map/>
            </div>
        )
    }
}

export default App