import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as action from '../../actions/craAction';
import styles from './_rbox.css';
import * as CI from '../../scripts/CongestionIndex';
import SearchResults from './menu/SearchResults';
import CraResults from './menu/CraResults';
import Pager from './menu/Pager';

class Rbox extends React.Component {
    constructor() {
        super();
        this.state = {
            contraction: false,
            cross: false,
            road: false,
            area: false
        }
    }
    contractionBtnClick() {
        this.setState({
            contraction: !this.state.contraction
        })
    }
    showResults() {
        let rboxkey = this.props.cra.rboxkey;
        console.log(this.props.cra);
        switch (rboxkey) {
            case 'search':
                return this.props.search.list.map(item => {
                    item.key = item.title
                    return React.createElement(SearchResults, item);
                });
            case 'cross':
                CI.addCrossGracLayer(this.props.cra.cralist.geoDate);
                return <CraResults tabelData={this.props.cra.cralist.tabelData} lv1={this.props.cra.cralist.lv1} lv2={this.props.cra.cralist.lv2} lv3={this.props.cra.cralist.lv3} lv4={this.props.cra.cralist.lv4} lv5={this.props.cra.cralist.lv5}/>;
            case 'road':
                return <h1>{this.props.cra.rboxkey}</h1>
            case 'area':
                return <h1>{this.props.cra.rboxkey}</h1>
            default:
                break;
        }
    }
    crsBtnClick(layerName) {
        //lmsg.send('hi', { message: layerName });
        switch (layerName) {
            case 'cross':
                this.setState({
                    cross: true,
                    road: false,
                    area: false
                });
                break;
            case 'road':
                this.setState({
                    cross: false,
                    road: true,
                    area: false
                });
                break;
            case 'area':
                this.setState({
                    cross: false,
                    road: false,
                    area: true
                });
                break;
            default:
                break;
        }
        this.props.fetchCrossList(layerName);
    }
    render() {
        let {page, totalPage, dispatch} = this.props;
        let searchAvtive = (this.props.searchValue === "");
        return (
            <div id="rbox" className={styles.rbox}>
                <div id="navBody" className={this.state.contraction ? styles.navBody_none : styles.navBody_display}>
                    <section id="rboxPanels" className={styles.rboxPanels}>
                        <ul id='nav' className={styles.nav}>
                            <li id='cross' ref='cross' className={this.state.cross ? styles.craLi_active : styles.craLi} onClick={() => this.crsBtnClick(this.refs.cross.id) }>
                                <span className={styles.navTxt}>路口</span>
                            </li>
                            <li id='road' ref='road' className={this.state.road ? styles.craLi_active : styles.craLi} onClick={() => this.crsBtnClick(this.refs.road.id) }>
                                <span className={styles.navTxt}>路段</span>
                            </li>
                            <li id='area' ref='area' className={this.state.area ? styles.craLi_active : styles.craLi} onClick={() => this.crsBtnClick(this.refs.area.id) }>
                                <span className={styles.navTxt}>区域</span>
                            </li>
                        </ul>
                        <div id='resultPanel' className={styles.resultPanel}>
                            {this.showResults() }
                        </div>
                    </section>
                </div>
                <div id="contractionBtn" className={styles.rboxPanCtrl} onClick={() => this.contractionBtnClick() }>
                    <i className={styles.fa + ' ' + styles.faChevronUp} id="contractionInsideBtnUp"></i>
                </div>
            </div>
        )
    }
    componentDidMount() {
        // <Pager page={page} totalPage={totalPage} onChangePage={i => this.props.fetchList(null, i) } />
        let self = this;
        lmsg.subscribe('hi', getMes);
        function getMes(data) {
            if (data.message == "cross") {
                self.refs.cross.click();
            } else if (data.message == "road") {
                self.refs.road.click();
            }else{
                self.refs.area.click();
            }
        }
    }
}

Rbox.defaultProps={
    page:1,
    totalPage:10
}

function mapStateToProps(state) {
    return {
        search: state.search,
        cra: state.cra
    }
}

export default connect(mapStateToProps, action)(Rbox);