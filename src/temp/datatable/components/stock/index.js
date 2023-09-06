import React from "react";

import styles from './stock.module.scss';

function Stock(props) {
  let { data, row } = props;
  return (
    <div className={styles.common}>
      <div className={`${styles.wrapper} ${(!row?.alwaysInstock && data <= 0) ? styles.error : styles.success}`}>
        {(!row?.alwaysInstock && data <= 0) ? 'Out of Stock' : 'In Stock '}
      </div>
    </div>

  );
}

export default Stock;