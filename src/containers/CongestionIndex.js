import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../components/search/Search';
import ToolBar from '../components/toolBar/ToolBar';
import Rbox from '../components/rbox/Rbox';
import Map from '../components/map/Map';
import Modular from '../components/Modular/Collection';
import Emap from '../components/map/Emap';

class CongestionIndex extends React.Component {
    render() {
        return (
            <div>
                <Map/>
                <Search/>
                <ToolBar/>
                <Rbox/>
                <Modular/>
            </div>
        )
    }
}

export default CongestionIndex