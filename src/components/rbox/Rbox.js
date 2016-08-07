import React from 'react';
import { connect } from 'react-redux';
import * as action from '../../actions/searchAction';
import styles from './_rbox.css';
import * as CI from '../../scripts/CongestionIndex';

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
    render() {
        let searchAvtive = (this.props.searchValue === "");
        console.log(searchAvtive);
        console.log(this.state.contraction);
        return (
            <div id="rbox" className={styles.rbox}>
                {/*<div className={searchAvtive ? styles.rboxSearchPanCtrl_none : styles.rboxSearchPanCtrl_display}>展开指数面板</div>*/}
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
                        <div className={styles.resultPanel}>
                            <h1>hello world</h1>
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
        searchValue: state.search.search_Value
    }
}

export default connect(mapStateToProps, action)(Rbox);