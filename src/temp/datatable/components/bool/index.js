import React from "react";

import styles from './bool.module.scss';

function Bool(props) {
  let { data, yesKey='Yes', noKey='No' } = props;
  return (
    <div className={styles.common}>
      <div className={`${styles.wrapper} ${(data && yesKey==='Yes')&& styles.success}
       ${(!data && noKey==='Yes')&& styles.error}`}>
        {data ? yesKey : noKey}
      </div>
    </div>

  );
}

export default Bool;