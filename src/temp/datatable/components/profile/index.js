import React from "react";

import styles from './link.module.scss';

function Profile(props){
  
  const { data } = props;

  return(
    <div className={styles.wrapper}>
      {`${data?.firstName ? data?.firstName : ''} ${data?.lastName? data?.lastName : ''}`}
    </div>
  );
}

export default Profile;