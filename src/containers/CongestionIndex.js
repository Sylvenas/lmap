import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../components/search/Search';
import ToolBar from '../components/toolBar/ToolBar';
import Rbox from '../components/rbox/Rbox';
import Map from '../components/map/Map';
import Emap from '../components/map/Emap';

class CongestionIndex extends React.Component {
    render() {
        return (
            <div>
                <Map/>
                <Search/>
                <ToolBar/>
                <Rbox/>
            </div>
        )
    }
}

export default CongestionIndex