import React from 'react';
import { connect } from 'react-redux';
import * as action from '../../actions/searchAction';

class Rbox extends React.Component {
    render() {
        console.log('i am the rbox');
        console.log(this.props.searchValue);
        return (
            <h1>{this.props.searchValue}</h1>
        )
    }
}

function mapStateToProps(state) {
    return {
        searchValue: state.search.search_Value
    }
}

export default connect(mapStateToProps, action)(Rbox);