import React from 'react';
import styles from './_toolBar.css';

class ToolBar extends React.Component {
    constructor() {
        super();
    }
    trafficClick(){
        console.log(this);
    }
    render() {
        return (
            <div className={styles.layerbox}>
                <div id="layerbox" className={styles.layerboxIn}>
                    <div id="toolBar">
                        <ul>
                            <li id="trafficConditions" onClick={this.trafficClick.bind(this)}>
                                <div type="traffic">
                                    <span className={styles.traffic}>路况</span>
                                </div>
                            </li>
                            <li id="satelliteMap">
                                <div type="satellite">
                                    <span className={styles.traffic}>卫星</span>
                                </div>
                            </li>
                            <li id="subway">
                                <div type="subway">
                                    <span className={styles.subway}>事故</span>
                                </div>
                            </li>
                            <li id="distanceMeasure">
                                <div type="ranging">
                                    <span className={styles.ranging}>测距</span>
                                </div>
                            </li>
                            <li id="fullScreen">
                                <div type="fullscreen">
                                    <span className={styles.fullscreen}>全屏</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default ToolBar