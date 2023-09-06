import React from "react";

import styles from "./status.module.scss";

function Status(props) {
  let { data, custom, onClick } = props;
  return (
    <div className={styles.common}>
      {typeof data === "boolean" ? (
        <div
          onClick={onClick && onClick}
          className={`${styles.wrapper} ${styles["_" + data]}  ${
            styles[data ? "_Active" : "_Expired"]
          }`}
        >
          {data ? "Yes" : "No"}
        </div>
      ) : (
        <div
          onClick={onClick && onClick}
          className={`${styles.wrapper} ${styles["_" + data]} ${
            styles[custom ? "_" + custom : "_default"]
          }`}
        >
          {data}
        </div>
      )}
    </div>
  );
}

export default Status;
