import React from 'react';
import L from 'leaflet';
import LE from 'esri-leaflet';
import styles from './_search.css';
import logoSrc from '../../images/logo_new.png';
import { connect } from 'react-redux';
import * as action from '../../actions/searchAction';
//import { browserHistory } from 'react-router';

class Search extends React.Component {
    constructor() {
        super();
        //this.state = { val: '' }
        this.update = this.update.bind(this);
    }

    update(e) {
        let newVal = this.refs.searchVal.value;
        this.props.searchChange(newVal);
        //browserHistory.push('/TG');
        // this.setState({
        //     val: newVal
        // })
        // this.props.callbackParent(newVal);
        // LE.featureLayer({
        //     url: 'https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Heritage_Trees_Portland/FeatureServer/0'
        // }).addTo(map)
    }

    render() {
        console.log("####");
        console.log(this.props.propsValue);
        console.log("####");
        return (
            <section id="search" className={styles.search}>
                <header className={styles.searchbox}>
                    <img className={styles.logo} src={logoSrc} draggable="false"/>
                    <div className={styles.iptbox}>
                        <input type="text" ref="searchVal" id="searchipt"  placeholder="搜索位置、公交站、地铁站" className={styles.searchipt}/>
                    </div>
                    <span id="separator" className={styles.separator}></span>
                    <div className={styles.direntry} id="searchbtn" title="搜索" onClick={this.update}>
                        <i className={styles.fa + ' ' + styles.fa_search + ' ' + styles.searchlogo}></i>
                        <span id="searchloading" className={styles.ring}></span>
                    </div>
                </header>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        propsValue: state.search.search_Value
    }
}

export default connect(mapStateToProps,action)(Search)