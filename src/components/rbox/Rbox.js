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
            contraction: false
        }
    }
    contractionBtnClick() {
        this.setState({
            contraction: !this.state.contraction
        })
    }
    renderList() {
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

        // if (this.props.search.rboxKey=='search') {
        //     console.log('rbox1111:rboxKey: '+this.props.search.rboxKey)
        //     return this.props.search.list.map(item => {
        //         item.key = item.title
        //         return React.createElement(SearchResults, item);
        //     })
        // }
        // else{
        //     console.log('rbox2222:rboxKey: '+this.props.search.rboxKey)
        //     console.log('rbox2222:list: '+this.props.search.list)
        //     return <h1>{this.props.search.rboxKey}</h1>
        // }
    }
    crsBtnClick(layerName) {
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
                            <li id='cross' ref='cross' className={styles.craLi} onClick={() => this.crsBtnClick(this.refs.cross.id) }>
                                <span className={styles.navTxt}>路口</span>
                            </li>
                            <li id='road' ref='road' className={styles.craLi} onClick={() => this.crsBtnClick(this.refs.road.id) }>
                                <span className={styles.navTxt}>路段</span>
                            </li>
                            <li id='area' ref='area' className={styles.craLi} onClick={() => CI.addGracLayer(this.refs.area) }>
                                <span className={styles.navTxt}>区域</span>
                            </li>
                        </ul>
                        <div id='resultPanel' className={styles.resultPanel}>
                            {this.renderList() }
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