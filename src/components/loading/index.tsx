import React from 'react';
import styles from './Loading.module.css';

interface Props {
  loading?: boolean;
}

const Loading: React.FC<Props> = ({ loading }) => {
  console.log(loading);
  return (
    <div className={loading ? styles.body_loading : styles.none}>
      <div className={styles.lds_ellipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
