import React from "react";

import styles from "./status.module.scss";

function NameWorkflow(props) {
  let { data, onClick } = props;
  let val = data?.split('_');
  let workflow = 'live';
  if (val[0] === "draft") {
    workflow = "draft";
  } else if (val[0] === "stage") {
    workflow = "stage";
  }

  return (
    <div className={styles.common}>
      <div onClick={onClick && onClick} className={`${styles.wrapper} ${styles["_" + workflow]}`} >
        {workflow}
      </div>
    </div>
  );
}

export default NameWorkflow;
