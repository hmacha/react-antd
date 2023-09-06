import React from "react";

import styles from "./status.module.scss";

function Type(props) {
  let { data, onClick } = props;
  return (
    <div className={styles.common}>
      {typeof data === "boolean" ? (
        <div
          onClick={onClick && onClick}
          className={`${styles.wrapper} ${styles["_" + data]}  ${
            styles[data ? "_Expired" : "_Active"]
          }`}
        >
          {data ? "Expired" : "Active"}
        </div>
      ) : (
        <div
          onClick={onClick && onClick}
          className={`${styles.wrapper} ${styles["_" + data]}`}
        >
          {data === "Create" ? "New" : data}
        </div>
      )}
    </div>
  );
}

export default Type;
