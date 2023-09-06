import React from "react";

import styles from "./link.module.scss";

function Link(props) {
  const { data, row, onRowAction, childOnRowAction,applyLinkstyles,column } = props;
  let datatoDisplay = row;
  let name = column.name;
  if(column?.isArray){
    for (let item in name) {
      if (datatoDisplay[name[item]]) {
        datatoDisplay = datatoDisplay[name[item]];
      }
    }
  }

  return (
    <div
      onClick={() => {
        onRowAction && onRowAction(row);
        childOnRowAction && childOnRowAction(row);
      }}
      className={`${applyLinkstyles?styles.linkStyles:styles.wrapper}`}
    >
      {column?.isArray?datatoDisplay:data}
    </div>
  );
}

export default Link;
