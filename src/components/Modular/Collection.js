import React from 'react';
import styles from './_collection.css';

class Collection extends React.Component {
    constructor() {
        super();
        this.state = {
            panelDisplay: false
        }
    }
    contractionBtnClick() {
        this.setState({
            panelDisplay: !this.state.panelDisplay
        })
    }
    render() {
        return (
            <div className={styles.modular}>
                <div id="panel" className={this.state.panelDisplay ? styles.panel : styles.panel_none}>
                    <h1>指数</h1>
                    <h1>信号</h1>
                </div>
                <div id="contractionBtn" className={this.state.panelDisplay ? styles.ctrlShow : styles.ctrlNone} onClick={() => this.contractionBtnClick()}>
                    <i className={styles.fa + ' ' + (this.state.panelDisplay ? styles.faChevronL : styles.faChevronR)} id="contractionInsideBtnUp"></i>
                </div>
            </div>
        )
    }
}

export default Collection