import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as action from '../../actions/searchAction';
import styles from './_rbox.css';
import * as CI from '../../scripts/CongestionIndex';
import SearchResults from './menu/SearchResults';

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
        return this.props.searchResults.map(item => {
            item.key = item.title
            return React.createElement(SearchResults, item);
        })
    }
    render() {
        let searchAvtive = (this.props.searchValue === "");
        return (
            <div id="rbox" className={styles.rbox}>
                <div id="navBody" className={this.state.contraction ? styles.navBody_none : styles.navBody_display}>
                    <section id="rboxPanels" className={styles.rboxPanels}>
                        <ul id='nav' className={styles.nav}>
                            <li id='cross' ref='cross' className={styles.craLi} onClick={() => CI.addGracLayer(this.refs.cross) }>
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
        searchResults: state.search.list
    }
}

export default connect(mapStateToProps, action)(Rbox);