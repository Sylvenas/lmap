import React from 'react';

class Search extends React.Component {
    render() {
        return (
            <section id="search" className="search">
                <header className="searchbox">
                    <img className="usel logo" src="../images/logo.png" draggable="false"/>
                    <div className="iptbox active">
                        <input type="text" id="searchipt"  placeholder="搜索位置、公交站、地铁站" className="active"/>
                    </div>
                    <span id="separator"></span>
                    <div className="direntry in-dir" id="searchbtn" title="搜索">
                        <i className="fa fa-search searchlogo"></i>
                        <span id="searchloading" className="ring"></span>
                    </div>
                    <div className="theonlysug main-sug autocomplete-suggestions"></div></header>
                <div className="dtrigger dragtop"></div>
                <div className="dtrigger dragbottom"></div>
                <div className="dtrigger dragleft"></div>
                <div className="dtrigger dragright"></div>
            </section>
        )
    }
}

export default Search