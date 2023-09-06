import React from "react";
import moment from 'moment';

import styles from './type.module.scss';

function Owner(props){
  let {data} = props;
  return(
    <div className={styles.wrapper}>
      { moment(data).format('DD-MM-YYYY hh:mm a')}
    </div>
  );
}

export default Owner;