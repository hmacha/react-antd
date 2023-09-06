import React from "react";

import styles from './link.module.scss';

function OrderSummary(props){
  
  const { data, row } = props;

  return(
    <div className={styles.wrapper}>
      {`${data?.orderTotal ? data?.orderTotal : ''} ${row?.currency ? row?.currency : ''}`}
    </div>
  );
}

export default OrderSummary;