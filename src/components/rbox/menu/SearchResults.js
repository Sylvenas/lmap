import React from 'react';

class SearchResults extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default SearchResults