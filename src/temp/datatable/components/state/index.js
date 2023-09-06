import React from "react";

import styles from "./status.module.scss";

function State(props) {
  let { data, custom, onClick } = props;
  let val = data?.split('_');
  return (
    <div className={styles.common}>
     <div
          onClick={onClick && onClick}
          className={`${styles.wrapper} ${styles["_" + val[0]]} ${
            styles[custom ? "_" + custom : "_default"]
          }`}
        >
          {data}
        </div>
    </div>
  );
}

export default State;
