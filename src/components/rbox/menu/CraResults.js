import React from 'react';
import styles from './_craResults.css';

class CraResults extends React.Component {
    render() {
        var names = [{ rank: 0, name: '友谊路-克山路', index: 2.56, hierarchy: '严重拥堵' },
            { rank: 1, name: '友谊路-克山路', index: 2.56, hierarchy: '严重拥堵' },
            { rank: 2, name: '友谊路', index: 2.56, hierarchy: '严重拥堵' },
            { rank: 3, name: '友谊路-克山路', index: 2.56, hierarchy: '中度拥堵' },
            { rank: 4, name: '友谊路-克山路', index: 2.56, hierarchy: '中度拥堵' },
            { rank: 5, name: '友谊路-克山路', index: 2.56, hierarchy: '中度拥堵' },
            { rank: 6, name: '友谊路-克山路', index: 2.56, hierarchy: '中度拥堵' },
            { rank: 7, name: '友谊路-克山路', index: 2.56, hierarchy: '中度拥堵' },
            { rank: 8, name: '友谊路-克山路', index: 2.56, hierarchy: '轻度拥堵' },
            { rank: 9, name: '友谊路-克山路', index: 2.56, hierarchy: '轻度拥堵' },
            { rank: 10, name: '友谊路', index: 2.56, hierarchy: '轻度拥堵' },
            { rank: 11, name: '友谊路-克山路', index: 2.56, hierarchy: '轻度拥堵' },
            { rank: 12, name: '友谊路-克山路', index: 2.56, hierarchy: '轻度拥堵' },
            { rank: 13, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
            { rank: 14, name: '友谊路-sdsad克山路', index: 2.56, hierarchy: '基本畅通' },
            { rank: 15, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
            { rank: 16, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
            { rank: 17, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
            { rank: 18, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
            { rank: 19, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
            { rank: 20, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
            { rank: 21, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
            { rank: 22, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
            { rank: 23, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
            { rank: 24, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
            { rank: 25, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
            { rank: 26, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
            { rank: 27, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
            { rank: 28, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
            { rank: 29, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
            { rank: 30, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
            { rank: 31, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
            { rank: 32, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
            { rank: 33, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
            { rank: 34, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
            { rank: 35, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
            { rank: 36, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
            { rank: 37, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
            { rank: 38, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' }
        ];
        return (
            <div className={styles.traffic_tag}>
                <div>
                    <div>
                        <span className={styles.traffic_level_3}></span>
                        <span className={styles.smooth_jam}>轻度拥堵: </span>
                        <span className={styles.smooth_jam_num2}>10</span>
                        <span className={styles.traffic_level_1}></span>
                        <span className={styles.smooth_jam}>畅通: </span>
                        <span className={styles.smooth_jam_num}>30</span>
                    </div>
                    <div>
                        <span className={styles.traffic_level_4}></span>
                        <span className={styles.smooth_jam}>中度拥堵: </span>
                        <span className={styles.smooth_jam_num2}>20</span>
                        <span className={styles.traffic_level_2}></span>
                        <span className={styles.smooth_jam}>基本畅通: </span>
                        <span className={styles.smooth_jam_num2}>15</span>
                    </div>
                    <div>
                        <span className={styles.traffic_level_5}></span>
                        <span className={styles.smooth_jam}>严重拥堵: </span>
                        <span className={styles.smooth_jam_num2}>20</span>
                        <span id="separator" className={styles.separator}></span>
                    </div>
                </div>
                <div id='table' className={styles.table}>
                    <div>
                        <p>拥堵路口排名</p>
                        <span className={styles.smooth_jam_rank}>排名</span>
                        <span className={styles.smooth_jam_num_name}>名称</span>
                        <span className={styles.smooth_jam_num_index}>拥堵指数</span>
                        <span className={styles.smooth_jam_num_hierarchy}>拥堵等级</span>
                    </div>
                    <ul id='table_rows' className={styles.table_rows}>
                        {names.map(item => {
                            return <TableRow item={item}/>
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
                    <li className={styles.name}>{this.props.item.name}</li>
                    <li className={styles.index}>{this.props.item.index}</li>
                    <li style={hierarchyStyle}>{this.props.item.hierarchy}</li>
                </ul>
            </li>
        )
    }
}

export default CraResults