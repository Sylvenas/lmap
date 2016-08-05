import React from 'react';
import { connect } from 'react-redux';
import * as action from '../../actions/searchAction';
import styles from './_rbox.css';

class Rbox extends React.Component {
    constructor() {
        super();
        this.state={
            contraction:false
        }
    }
    contractionBtnClick(){
        this.setState({
            contraction:!this.state.contraction
        })
    }
    render() {
        console.log('i am the rbox');
        let searchAvtive = (this.props.searchValue === "");
        console.log(searchAvtive);
        console.log('i am the contraction');
        console.log(this.state.contraction);
        return (
            <div id="rbox" className={styles.rbox}>
                {/*<div className={searchAvtive ? styles.rboxSearchPanCtrl_none : styles.rboxSearchPanCtrl_display}>展开指数面板</div>*/}
                <div id="navBody" className={this.state.contraction?styles.navBody_none:styles.navBody_display}>
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
                            <h1>hello world</h1>
                        </div>
                    </section>
                </div>
                <div id="contractionBtn" className={styles.rboxPanCtrl} onClick={() =>this.contractionBtnClick()}>
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