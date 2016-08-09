import React from 'react';
import ReactDOM from 'react-dom';
import TrafficConditions from './menu/Traffic'
import styles from './_toolBar.css';

class ToolBar extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div id='toolBar' className={styles.layerbox}>
                <div id="layerbox" className={styles.layerboxIn}>
                    <div id="toolBar">
                        <ul>
                            <TrafficConditions/>
                            <li id="satelliteMap">
                                <div type="satellite">
                                    <span className={styles.satellite}>回放</span>
                                </div>
                            </li>
                            <li id="subway">
                                <div type="subway">
                                    <span className={styles.subway}>事故</span>
                                </div>
                            </li>
                            <li id="distanceMeasure">
                                <div type="ranging">
                                    <span className={styles.ranging}>工具</span>
                                </div>
                            </li>
                            <li id="fullScreen">
                                <div type="fullscreen">
                                    <span className={styles.fullscreen}>全屏</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div id='presetBox'/>
                </div>
            </div>
        )
    }
}



export default ToolBar