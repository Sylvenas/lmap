import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as action from '../../actions/searchAction';
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
        let rboxkey = this.props.search.rboxKey;
        switch (rboxkey) {
            case 'search':
                return this.props.search.list.map(item => {
                    item.key = item.title
                    return React.createElement(SearchResults, item);
                });
            case 'cross':
                CI.addCrossGracLayer();
                return React.createElement(CraResults);
            case 'road':
                return <h1>{this.props.search.rboxKey}</h1>
            case 'area':
                return <h1>{this.props.search.rboxKey}</h1>
            default:
                break;
        }
    }
    crsBtnClick(layerName) {
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
        this.props.fetchCrossList(layerName)
    }
    render() {
        let {page, totalPage, dispatch} = this.props;
        let searchAvtive = (this.props.searchValue === "");

        //console.log('searchAvtive:' + searchAvtive);
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
                            <Pager page={page} totalPage={totalPage} onChangePage={i => this.props.fetchList(null, i) } />
                        </div>
                    </section>
                </div>
                <div id="contractionBtn" className={styles.rboxPanCtrl} onClick={() => this.contractionBtnClick() }>
                    <i className={styles.fa + ' ' + styles.faChevronUp} id="contractionInsideBtnUp"></i>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        search: state.search,
        cra: state.cra
    }
}

export default connect(mapStateToProps, action)(Rbox);