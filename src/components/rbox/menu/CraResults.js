import React from 'react';
import styles from './_craResults.css';

class CraResults extends React.Component {
    render() {
        console.log(this.props.tabelData);
        return (
            <div className={styles.traffic_tag}>
                <div>
                    <div>
                        <span className={styles.traffic_level_3}></span>
                        <span className={styles.smooth_jam}>轻度拥堵: </span>
                        <span className={styles.smooth_jam_num2}>{this.props.lv3}</span>
                        <span id="separator" className={styles.separator_LV3}></span>
                        <span className={styles.traffic_level_1}></span>
                        <span className={styles.smooth_jam1}>畅通: </span>
                        <span className={styles.smooth_jam_num3}>{this.props.lv1}</span>
                        <span id="separator" className={styles.separator_LV1}></span>
                    </div>
                    <div>
                        <span className={styles.traffic_level_4}></span>
                        <span className={styles.smooth_jam}>中度拥堵: </span>
                        <span className={styles.smooth_jam_num2}>{this.props.lv4}</span>
                        <span id="separator" className={styles.separator_LV4}></span>
                        <span className={styles.traffic_level_2}></span>
                        <span className={styles.smooth_jam2}>基本畅通: </span>
                        <span className={styles.smooth_jam_num4}>{this.props.lv2}</span>
                        <span id="separator" className={styles.separator_LV2}></span>
                    </div>
                    <div>
                        <span className={styles.traffic_level_5}></span>
                        <span className={styles.smooth_jam}>严重拥堵: </span>
                        <span className={styles.smooth_jam_num2}>{this.props.lv5}</span>
                        <span id="separator" className={styles.separator_LV5}></span>
                        <span id="separator" className={styles.separator_LV0}></span>
                    </div>
                </div>
                <div id='table' className={styles.table}>
                    <div>
                        <p>拥堵排名</p>
                        <span className={styles.smooth_jam_rank}>排名</span>
                        <span className={styles.smooth_jam_num_name}>名称</span>
                        <span className={styles.smooth_jam_num_index}>拥堵指数</span>
                        <span className={styles.smooth_jam_num_hierarchy}>拥堵等级</span>
                    </div>
                    <ul id='table_rows' className={styles.table_rows}>
                        {this.props.tabelData.map(item => {
                            return <TableRow key={item} item={item}/>
                        }) }
                    </ul>
                </div>
            </div>
        )
    }
}

class TableRow extends React.Component {
    constructor() {
        super();
    }
    render() {
        var hierarchyStyle = null;
        switch (this.props.item.hierarchy) {
            case '畅通':
                hierarchyStyle = {
                    color: '#36AE4C',
                    float: 'left',
                    width: '60px',
                    height: '20px',
                    textAlign: 'center'
                };
                break;
            case '基本畅通':
                hierarchyStyle = {
                    color: '#6AB72D',
                    float: 'left',
                    width: '60px',
                    height: '20px',
                    textAlign: 'center'
                };
                break;
            case '轻度拥堵':
                hierarchyStyle = {
                    color: '#ECE839',
                    float: 'left',
                    width: '60px',
                    height: '20px',
                    textAlign: 'center'
                };
                break;
            case '中度拥堵':
                hierarchyStyle = {
                    color: '#F29618',
                    float: 'left',
                    width: '60px',
                    height: '20px',
                    textAlign: 'center'
                };
                break;
            case '严重拥堵':
                hierarchyStyle = {
                    color: '#E41A16',
                    float: 'left',
                    width: '60px',
                    height: '20px',
                    textAlign: 'center'
                };
                break;
            default:
                hierarchyStyle = {
                    float: 'left',
                    width: '60px',
                    height: '20px',
                    textAlign: 'center'
                };
                break;
        }
        return (
            <li id='row' className={styles.row}>
                <ul>
                    <li className={styles.rank}>{this.props.item.rank}</li>
                    <li className={styles.name} title={this.props.item.name}>{this.props.item.name}</li>
                    <li className={styles.index}>{this.props.item.index}</li>
                    <li style={hierarchyStyle}>{this.props.item.hierarchy}</li>
                </ul>
            </li>
        )
    }
}

export default CraResults