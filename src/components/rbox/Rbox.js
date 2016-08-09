import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as action from '../../actions/searchAction';
import styles from './_rbox.css';
import * as CI from '../../scripts/CongestionIndex';
import SearchResults from './menu/SearchResults';
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
        // console.log(this.props.cra.cralist);
        // console.log(this.props.search.list);
        console.log("keyword:"+this.props.search.keyword);
        return this.props.search.list.map(item => {
            item.key = item.title
            return React.createElement(SearchResults, item);
        })
    }
    crsBtnClick(layerName) {
        //console.log(layerName);
        this.props.pushCrossList(layerName)
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
                            <li id='road' ref='road' className={styles.craLi} onClick={() => CI.addGracLayer(this.refs.road) }>
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