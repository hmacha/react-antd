import React from "react";

import styles from './status.module.scss';

function OrderStatus(props){
  let {data} = props;
  return(
    <div className={styles.common}>
      <div className={`${styles.wrapper} ${styles['_'+data]}}`}>
        {data}
      </div>
    </div>
   
  );
}

export default OrderStatus;