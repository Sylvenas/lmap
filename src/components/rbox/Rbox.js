import React from 'react';
import { connect } from 'react-redux';
import * as action from '../../actions/searchAction';
import styles from './_rbox.css'

class Rbox extends React.Component {
    render() {
        console.log('i am the rbox');
        let searchAvtive = (this.props.searchValue === "");
        console.log(searchAvtive);
        return (
            <div id="rbox" className={styles.rbox}>
                {/*<div className={searchAvtive ? styles.rboxSearchPanCtrl_none : styles.rboxSearchPanCtrl_display}>展开指数面板</div>*/}
                <div id="navBody">
                    <section id="rboxPanels" className={styles.rboxPanels}>
                        <ul id='nav' className={styles.nav}>
                            <li id='cross' className={styles.craLi}>
                                <span className={styles.navTxt}>路口</span>
                            </li>
                            <li id='road' className={styles.craLi}>
                                <span className={styles.navTxt}>路段</span>
                            </li>
                            <li id='area' className={styles.craLi}>
                                <span className={styles.navTxt}>区域</span>
                            </li>
                        </ul>
                        <div className={styles.resultPanel}>
                        </div>
                    </section>
                </div>
                <div id="contractionBtn" className={styles.rboxPanCtrl}>
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