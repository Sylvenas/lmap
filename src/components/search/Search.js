import React from 'react';
import styles from './_search.css';
import logo from '../../images/logo.png';

class Search extends React.Component {
    render() {
        return (
            <section id="search" className={styles.search}>
                <header className={styles.searchbox}>
                    <img className={styles.logo} src={logo} draggable="false"/>
                    <div className={styles.iptbox}>
                        <input type="text" id="searchipt"  placeholder="搜索位置、公交站、地铁站" className={styles.searchipt}/>
                    </div>
                    <span id="separator" className={styles.separator}></span>
                    <div className={styles.direntry} id="searchbtn" title="搜索">
                        <i className={styles.fa+' '+styles.fa_search+' '+styles.searchlogo}></i>
                        <span id="searchloading" className={styles.ring}></span>
                    </div>
                </header>
            </section>
        )
    }
}

export default Search