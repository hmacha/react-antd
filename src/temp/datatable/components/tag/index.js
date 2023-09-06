import React from "react";

import styles from "./type.module.scss";

function Tags(props) {
  let { data } = props;
  return (
    <div className={styles.wrapper}>
      {data?.length > 0 && data.map((item) => <span key={item}>{item}</span>)}
    </div>
  );
}

export default Tags;
