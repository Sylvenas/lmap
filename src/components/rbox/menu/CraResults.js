import React from 'react';
import styles from './_craResults.css';

class CraResults extends React.Component {
    render() {
        var names = [{rank:1,name:'友谊路-克山路',index:2.56,hierarchy:'基本畅通'},
        {rank:1,name:'友谊路-克山路',index:2.56,hierarchy:'基本畅通'},
        {rank:1,name:'友谊路-克山路',index:2.56,hierarchy:'基本畅通'},
        {rank:1,name:'友谊路-克山路',index:2.56,hierarchy:'基本畅通'},
        {rank:1,name:'友谊路-克山路',index:2.56,hierarchy:'基本畅通'},
        {rank:1,name:'友谊路-克山路',index:2.56,hierarchy:'基本畅通'},
        {rank:1,name:'友谊路-克山路',index:2.56,hierarchy:'基本畅通'},
        {rank:1,name:'友谊路-克山路',index:2.56,hierarchy:'基本畅通'},
        {rank:1,name:'友谊路-克山路',index:2.56,hierarchy:'基本畅通'},
        {rank:1,name:'友谊路-克山路',index:2.56,hierarchy:'基本畅通'},
        {rank:1,name:'友谊路-克山路',index:2.56,hierarchy:'基本畅通'},
        {rank:1,name:'友谊路-克山路',index:2.56,hierarchy:'基本畅通'},
        {rank:1,name:'友谊路-克山路',index:2.56,hierarchy:'基本畅通'},
        {rank:1,name:'友谊路-克山路',index:2.56,hierarchy:'基本畅通'},
        {rank:1,name:'友谊路-克山路',index:2.56,hierarchy:'基本畅通'},
        {rank:1,name:'友谊路-克山路',index:2.56,hierarchy:'基本畅通'},
        {rank:1,name:'友谊路-克山路',index:2.56,hierarchy:'基本畅通'},
        {rank:1,name:'友谊路-克山路',index:2.56,hierarchy:'基本畅通'},
        {rank:1,name:'友谊路-克山路',index:2.56,hierarchy:'基本畅通'},
        {rank:1,name:'友谊路-克山路',index:2.56,hierarchy:'基本畅通'},
        {rank:1,name:'友谊路-克山路',index:2.56,hierarchy:'基本畅通'},
        {rank:1,name:'友谊路-克山路',index:2.56,hierarchy:'基本畅通'},
        {rank:1,name:'友谊路-克山路',index:2.56,hierarchy:'基本畅通'},
        {rank:1,name:'友谊路-克山路',index:2.56,hierarchy:'基本畅通'},
        {rank:1,name:'友谊路-克山路',index:2.56,hierarchy:'基本畅通'},
        {rank:1,name:'友谊路-克山路',index:2.56,hierarchy:'基本畅通'},
        {rank:1,name:'友谊路-克山路',index:2.56,hierarchy:'基本畅通'},
        {rank:1,name:'友谊路-克山路',index:2.56,hierarchy:'基本畅通'},
        {rank:1,name:'友谊路-克山路',index:2.56,hierarchy:'基本畅通'},
        {rank:1,name:'友谊路-克山路',index:2.56,hierarchy:'基本畅通'},
        {rank:1,name:'友谊路-克山路',index:2.56,hierarchy:'基本畅通'},
        {rank:1,name:'友谊路-克山路',index:2.56,hierarchy:'基本畅通'},
        {rank:1,name:'友谊路-克山路',index:2.56,hierarchy:'基本畅通'},
        {rank:1,name:'友谊路-克山路',index:2.56,hierarchy:'基本畅通'},
        {rank:1,name:'友谊路-克山路',index:2.56,hierarchy:'基本畅通'},
        {rank:1,name:'友谊路-克山路',index:2.56,hierarchy:'基本畅通'},
        {rank:1,name:'友谊路-克山路',index:2.56,hierarchy:'基本畅通'},
        {rank:1,name:'友谊路-克山路',index:2.56,hierarchy:'基本畅通'},
        {rank:1,name:'友谊路-克山路',index:2.56,hierarchy:'基本畅通'}
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
                        {names.map(item=>{
                            return <TableRow item={item}/>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

class TableRow extends React.Component {
    render() {
        return (
            <li id='row' className={styles.row}>
                <span className={styles.rank}>{this.props.item.rank}</span>
                <span className={styles.name}>{this.props.item.name}</span>
                <span className={styles.index}>{this.props.item.index}</span>
                <span className={styles.hierarchy}>{this.props.item.hierarchy}</span>
            </li>
        )
    }
}

export default CraResults