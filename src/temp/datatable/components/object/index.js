import React from "react";
import _isObject from 'lodash/isObject';
import styles from "./lock.module.scss";

function ObjectKey(props) {
  let { data, onClick, keyName } = props;
  let content='';
  if(_isObject(data)){
    for (const property in data) {
      content= data[property][keyName];
    }
  }else{
    content = data;
  }

  return (
    <div onClick={onClick && onClick} className={`${styles.wrapper}`} >
      {content}
    </div>
  );
}

export default ObjectKey;
