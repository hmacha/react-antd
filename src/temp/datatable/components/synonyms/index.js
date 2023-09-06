import React from "react";
import _isObject from 'lodash/isObject';
import styles from "./lock.module.scss";

function Synonyms(props) {
  let { data, onClick, keyName, row } = props;
  let content='';
  if(_isObject(data)){
    for (const property in data) {
      content= data[property][keyName];
      if(row?.multiWay){
        let cx= content.split(',');
        let element='';
        for (let index = 0; index < cx.length; index++) {
          element +=  cx[index] + (cx.length-1 !== index ? ' = ' : ' ');
        }
        content= element;
      }
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

export default Synonyms;
