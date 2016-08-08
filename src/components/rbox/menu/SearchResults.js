import React from 'react';

class SearchResults extends React.Component {
    render() {
        let date = new Date(this.props.time)
        return (
            <div>
                <h2>{this.props.title}</h2>
                <div style={{ padding: '16px 0', color: '#888' }}>
                    {date.toLocaleDateString() } {date.toLocaleTimeString() }
                </div>
                <div style={{ textAlign: 'center' }}>
                    <img src={this.props.img} style={{ maxWidth: '100%' }}/>
                </div>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default SearchResults