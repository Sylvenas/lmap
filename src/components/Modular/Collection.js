import React from 'react';
import styles from './_collection.css';

class Collection extends React.Component {
    constructor() {
        super();
        this.state = {
            trafficIndex: null,
            panelDisplay: false
        }
    }
    contractionBtnClick() {
        this.setState({
            panelDisplay: !this.state.panelDisplay
        })
    }
    showIndex() {
        let self = this;
        require.ensure([],
            (require) => {
                var Index = require('./TrafficIndex/TrafficIndex').default;
                self.setState({
                    trafficIndex: <Index />
                });
            },
            'TrafficIndex')
    }
    showSignal() {
        let self = this;
        require.ensure([],
            (require) => {
                var Signal = require('./Signal/Signal').default;
                self.setState({
                    trafficIndex: <Signal />
                });
            },
            'Signal')
    }
    render() {
        let Index = this.Index;
        return (
            <div id='modularCol' className={styles.modular}>
                <div id="panel" className={this.state.panelDisplay ? styles.panel : styles.panel_none}>
                    <section id="rboxPanels" className={styles.rboxPanels}>
                        <div id='resultPanel' className={styles.resultPanel}>
                            <h1 onClick={() => this.showIndex()}>指数</h1>
                            <h1 onClick={() => this.showSignal()}>信号</h1>
                        </div>
                        <div className={styles.resultPanel}>
                            {this.state.trafficIndex}
                        </div>
                    </section>
                </div>
                <div id="contractionBtn" className={this.state.panelDisplay ? styles.ctrlShow : styles.ctrlNone} onClick={() => this.contractionBtnClick()}>
                    <i className={styles.fa + ' ' + (this.state.panelDisplay ? styles.faChevronL : styles.faChevronR)} id="contractionInsideBtnUp"></i>
                </div>
            </div>
        )
    }
}

export default Collection
