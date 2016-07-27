import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../_toolBar.css';
import trafficStyles from './_traffic.css'

class Traffic extends React.Component {
    constructor() {
        super();
        this.state={
            active:false
        }
    }
    mountTrafficConditions() {
        this.setState({
            active:!this.state.active
        })
        if(!document.getElementById('detailedRoad')){
        ReactDOM.render(
            <TrafficConditions/>, document.getElementById("presetBox")
        )}else{
            ReactDOM.unmountComponentAtNode(document.getElementById("presetBox"))
        }
    }
    render() {
        console.log(this.state.active);
        return (
            <div>
                <li id="trafficConditions" onClick={() => this.mountTrafficConditions() }>
                    <div type="traffic">
                        <span className={this.state.active? styles.traffic_active:styles.traffic}>路况</span>
                    </div>
                </li>
            </div>
        )
    }
}

class TrafficConditions extends React.Component {
    constructor() {
        super();
    }
    current() {
        ReactDOM.render(
            <Current/>, document.getElementById('traffic_detailed')
        )
    }
    forecast() {
        ReactDOM.render(
            <Forecast/>, document.getElementById('traffic_detailed')
        )
    }
    render() {
        return (
            <div className={trafficStyles.boxpanel}  id="detailedRoad">
                <div className={trafficStyles.panel_header}>
                    <ul className={trafficStyles.panel_tab}>
                        <li className={trafficStyles.panel_tab_li_active} id="traffic_current" type="current" onClick={() => this.current() }>实时</li>
                        <li className={trafficStyles.panel_tab_li} id="traffic_forecast" type="forecast" onClick={() => this.forecast() }>预测</li>
                    </ul>
                    <div className={trafficStyles.traffic_tag}>
                        <span className={trafficStyles.smooth_jam}>畅通</span>
                        <ul className={trafficStyles.traffic_level}>
                            <li className={trafficStyles.traffic_level_1}></li>
                            <li className={trafficStyles.traffic_level_2}></li>
                            <li className={trafficStyles.traffic_level_3}></li>
                            <li className={trafficStyles.traffic_level_4}></li>
                        </ul>
                        <span className={trafficStyles.smooth_jam}>拥堵</span>
                    </div>
                </div>
                <div className={trafficStyles.panel_body} id="traffic_detailed">

                </div>
            </div>
        )
    }
    componentDidMount() {
        ReactDOM.render(
            <Current/>, document.getElementById('traffic_detailed')
        );
    }
}

class Current extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className={trafficStyles.panel_body}>
                <span className={trafficStyles.time_lbl}>更新时间：</span>
                <span className={trafficStyles.date} id="dateNow">2015/12/2</span>
                <span className={trafficStyles.date} id="timeNow">14: 20</span>
            </div>
        )
    }
}

class Forecast extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className={trafficStyles.panel_body}>
                <span className={trafficStyles.time_lbl}>预测时间：</span>
                <span className={trafficStyles.date} id="dateNow">2015/12/2</span>
                <span className={trafficStyles.date} id="timeNow">14: 20</span>
            </div>
        )
    }
}

export default Traffic