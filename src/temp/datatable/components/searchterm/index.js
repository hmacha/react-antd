/* eslint-disable max-len */
import React from "react";
import _isObject from 'lodash/isObject';
import styles from "./lock.module.scss";
function SearchTerm(props) {
  let { data, keyName, row, onRowAction } = props;
  let lockData = row?.assetLock;
  let content='';
  if(_isObject(data)){
    for (const property in data) {
      content= data[property][keyName];
    }
  }else{
    content = data;
  }

  return (
    <div   onClick={() => {
      onRowAction && onRowAction(row);
    }} className={`${styles.wrapper}`} >
      {lockData && lockData?.isLocked && <div className={styles.iconLock}>
        <svg fill="#FFF" version="1.1" id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px" y="0px" width="8px" height="8px" viewBox="0 0 96.108 122.88" enableBackground="new 0 0 96.108 122.88" xmlSpace="preserve"><g><path fillRule="evenodd" clipRule="evenodd" d="M2.892,56.036h8.959v-1.075V37.117c0-10.205,4.177-19.484,10.898-26.207v-0.009 C29.473,4.177,38.754,0,48.966,0C59.17,0,68.449,4.177,75.173,10.901l0.01,0.009c6.721,6.723,10.898,16.002,10.898,26.207v17.844 v1.075h7.136c1.59,0,2.892,1.302,2.892,2.891v61.062c0,1.589-1.302,2.891-2.892,2.891H2.892c-1.59,0-2.892-1.302-2.892-2.891 V58.927C0,57.338,1.302,56.036,2.892,56.036L2.892,56.036z M26.271,56.036h45.387v-1.075V36.911c0-6.24-2.554-11.917-6.662-16.03 l-0.005,0.004c-4.111-4.114-9.787-6.669-16.025-6.669c-6.241,0-11.917,2.554-16.033,6.665c-4.109,4.113-6.662,9.79-6.662,16.03 v18.051V56.036L26.271,56.036z M49.149,89.448l4.581,21.139l-12.557,0.053l3.685-21.423c-3.431-1.1-5.918-4.315-5.918-8.111 c0-4.701,3.81-8.511,8.513-8.511c4.698,0,8.511,3.81,8.511,8.511C55.964,85.226,53.036,88.663,49.149,89.448L49.149,89.448z"/></g></svg>
      </div>}
      {lockData && !lockData?.isLocked && <div className={styles.tick}>
        <svg fill="#34c58f" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="18px" height="18px" viewBox="0 0 122.881 122.88" enableBackground="new 0 0 122.881 122.88" xmlSpace="preserve"><g><path fillRule="evenodd" clipRule="evenodd" d="M61.44,0c33.933,0,61.441,27.507,61.441,61.439 c0,33.933-27.508,61.44-61.441,61.44C27.508,122.88,0,95.372,0,61.439C0,27.507,27.508,0,61.44,0L61.44,0z M34.106,67.678 l-0.015-0.014c-0.785-0.718-1.207-1.685-1.256-2.669c-0.049-0.982,0.275-1.985,0.984-2.777c0.01-0.011,0.019-0.021,0.029-0.031 c0.717-0.784,1.684-1.207,2.668-1.256c0.989-0.049,1.998,0.28,2.792,0.998l12.956,11.748l31.089-32.559v0 c0.74-0.776,1.723-1.18,2.719-1.204c0.992-0.025,1.994,0.329,2.771,1.067v0.001c0.777,0.739,1.18,1.724,1.205,2.718 c0.025,0.993-0.33,1.997-1.068,2.773L55.279,81.769c-0.023,0.024-0.048,0.047-0.073,0.067c-0.715,0.715-1.649,1.095-2.598,1.13 c-0.974,0.037-1.963-0.293-2.744-1L34.118,67.688L34.106,67.678L34.106,67.678L34.106,67.678z"/></g></svg>
      </div>}
      {<div className={styles.text}>
        <span>{content}</span>
        {lockData?.isLocked&& <span className={styles.name}>Locked by {lockData?.lockOwnedByUserName}</span>}
      </div>}
    </div>
  );
}

export default SearchTerm;
